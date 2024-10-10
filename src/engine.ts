/*
 * @Author: xiexp
 * @Description:
 * @Date: 2024-10-08 17:44:41
 * @LastEditTime: 2024-10-10 17:17:00
 * @FilePath: \effects\src\engine.ts
 */
import { Tween, TweenHandler } from "./tween";

export interface AnimateHandler {
  (progress: number): void;
}

export interface EngineHandler extends Function {
  cancel: Function;
}

/**
 * engine
 * @param handler
 * @param duration
 * @param easing
 * @param complete
 * @return EngineHandler
 */
export const engine = (
  handler: AnimateHandler,
  duration: number,
  easing: TweenHandler = Tween.linear,
  complete?: Function,
  isScroll?: boolean
): EngineHandler => {
  // 当前时间时间戳
  const start = performance.now();
  let raf: number;

  const play: EngineHandler = () => (raf = requestAnimationFrame(step));

  // 取消动画
  play.cancel = () => {
    raf && cancelAnimationFrame(raf);
  };

  // 回调函数只会传递一个时间戳（DOMHighResTimeStamp），就是这里的time，表示上一帧渲染那结束时间，
  const step = (time: number) => {
    // duration 为特效时长
    const fraction = (time - start) / duration;

    if (fraction < 0) {
      // 还没开始播
      return play();
    }
    if (fraction > 1 && !isScroll) {
      // 播完了
      handler(1);
      complete && complete();
      play.cancel();
    }else if(isScroll){
      handler((time - start)/1000);
      play();
    }else {
      //  0 < fraction <1
      const progress = easing(fraction);
      // 做css 动画移动
      handler(progress);
      // 执行动画回调，这个属于双击优化
      play();
    }
  };

  return play;
};

export default engine;
