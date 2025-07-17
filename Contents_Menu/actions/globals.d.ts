/// <reference types="easeljs" />

declare global {
  var stage: createjs.Stage;
  var javascript_object: any;
  var lib: any;

  // 글로벌 함수 정의한거 여기에 추가하면 자동완성 추천으로 띄워줌
  // function FuncTest(): void;

  // 인터페이스 보강
  namespace createjs {
    interface MovieClip {
      // MouseEnable: (value: boolean) => void;
      SetObjectAction: (nameFormat: string, action: Function) => void;
      SetObjectActionFor2D: (nameFormat: string, action: Function) => void;
      GetChildsByName: (nameFormat: string) => createjs.MovieClip  [];
      GetWorldPos: () => Point;
      GetWorldScale: () => { x: number; y: number; };
      Tween: (prop: any, duration: any, ease?: any) => Tween;
      Wait: (duration: any) => Tween;
      RemoveTweens: () => void;
      FrameToSecond: (label?: any) => number;
    }

    interface Container {
      GetScreenShotForMovieClip: (func: (bitmap: createjs.Bitmap) => void) => void;
    }
  };
}
export { };

