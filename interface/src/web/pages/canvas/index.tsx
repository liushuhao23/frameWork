/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-12-06 11:56:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-08 17:25:33
 */
import React, { useState, FC, useEffect } from 'react';

const getWH = (): { domWidth: number; domHeight: number } => {
  const domConfig = document.getElementById('canvasContent')!.getBoundingClientRect();
  return { domWidth: domConfig.width || 1000, domHeight: domConfig.height || 1000 };
};

// const initBg = (ctx: CanvasRenderingContext2D, domWidth: number, domHeight: number) => {
//   const bgImg = new Image();
//   bgImg.src = require('../../assets/images/bg.png');
//   bgImg.onload = () => {
//     ctx.drawImage(bgImg, 0, 0, 1200, 675);
//     setInterval(() => {
//       initBall(ctx);
//     }, 1000);
//     // initBall(ctx);
//   };
// };

// function draw(ctx: CanvasRenderingContext2D){

//   ctx.clearRect(0,0,600,400);

//   ctx.save();//保存画笔状态

//   ctx.translate(600/2*Math.random(), 400/2*Math.random());//开始移动画笔

//   ctx.drawImage(pic,0, 0);

//   ctx.restore();//绘制结束以后，恢复画笔状态

//   }

var speed = 0;
var startPoint = 800;
// function run(ctx: CanvasRenderingContext2D){
//     speed=-7;
//     // ctx.clearRect(0,0,1024,728);
//     //ctx.top+=speed;
//     startPoint+=speed;
//     ctx.beginPath();
//     ctx.arc(startPoint,300,30,0,2*Math.PI,true);
//     ctx.closePath();
//     ctx.fill();
// }
const initBall = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(800, 300, 30, 0, 2 * Math.PI, true);
  ctx.arc(195, 330, 15, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  setInterval(function () {
    // run(ctx);
  }, 500);
  // const bgImg = new Image();
  // bgImg.src = require('../../assets/images/ball2.png')
  // bgImg.onload = () => {
  //   ctx.clearRect(300, 400, 20, 20);

  //   ctx.save();//保存画笔状态

  //   ctx.translate(600/2*Math.random(), 400/2*Math.random());//开始移动画笔

  //   ctx.drawImage(bgImg, 300, 400, 20, 20);

  //   ctx.restore();//绘制结束以后，恢复画笔状态
  //   // initBall(ctx);
  // };
  // ctx.arc(195, 330, 5, 0, 2 * Math.PI); //arc 的意思是“弧”
  // ctx.fillStyle = '#ff0'; //设置填充颜色
  // ctx.fill(); //开始填充
  // ctx.strokeStyle = 'blue'; //将线条颜色设置为蓝色
  // ctx.stroke(); //stroke()
};
function run(ctx: CanvasRenderingContext2D) {
  speed = -7;
  ctx.clearRect(0, 0, 1200, 675);
  //ctx.top+=speed;
  startPoint += speed;
  ctx.beginPath();
  ctx.arc(startPoint, 300, 10, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
}

const line = (ctx: CanvasRenderingContext2D, path: number[]) => {
  return new Promise((r) => {
    const startX = path[0];
    const startY = path[1];
    const endX = path[2];
    const endY = path[3];

    let nextX;
    let nextY;

    // 第一帧执行的时间
    let startTime: number;
    // 期望动画持续的时间
    const duration = 1000;

    // 创建路径
    ctx.beginPath();
    // 创建一条子路径,把新的子路径起始点移动到(prevX,prevY)坐标.
    ctx.moveTo(startX, startY);
    // 设置线条样式
    ctx.strokeStyle = `#ffffff`;
    // ctx.strokeStyle = `rgba(${81}, ${160}, ${255},${0.25})`
    ctx.lineWidth = 1;

    /*
     * 动画帧绘制方法.
     * currentTime是requestAnimation执行回调方法step时会传入的一个执行时的时间(由performance.now()获得).
     * */
    const step = (currentTime: number) => {
      // ctx.clearRect(startX - 4, startY - 4, Math.abs(endX - startY) + 8, Math.abs(endY - startY) + 8)
      // 第一帧绘制时记录下开始的时间
      !startTime && (startTime = currentTime);
      // 已经过去的时间(ms)
      const timeElapsed = currentTime - startTime;
      // 动画执行的进度 {0,1}
      const progress = Math.min(timeElapsed / duration, 1);

      // 绘制方法
      const draw = () => {
        // 计算这一帧中线段应该到达的坐标点
        nextX = startX + (endX - startX) * progress;
        nextY = startY + (endY - startY) * progress;
        // 用直线连接子路径的最后的点到(nextX,nextY)坐标
        ctx.lineTo(nextX, nextY);
        // 绘制路径(所有子路径都会被绘制一次)
        ctx.stroke();
      };
      draw();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        r('')
        console.log('动画执行完毕');
      }
    };

    requestAnimationFrame(step);
  });
};
const CanvasCom: FC = () => {
  useEffect(() => {
    const { domWidth, domHeight } = getWH();
    let canvasElement: HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
    canvasElement.width = 1200;
    canvasElement.height = 675;
    let ctx: CanvasRenderingContext2D = canvasElement!.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(800, 300, 10, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
    const paths = [
      [400, 400, 500, 500],
      [500, 500, 600, 400],
      [600, 400, 650, 450],
    ];
    const aa = async () => {
      for (let i = 0; i < paths.length; i++) {
        await line(ctx, paths[i]);
      }
    }
    
    aa()
    // setTimeout(() => {
    //   run(ctx);
    // }, 1000);
    //   sett(function(){
    //     // run(ctx);
    // }, 50);
  }, []);
  return (
    <>
      <div
        className="flex justify-center"
        style={{ border: '1px solid red', width: '100%', height: '100%' }}
      >
        <div id="canvasContent" className="bg-ball-bg" style={{ width: '1200px', height: '675px' }}>
          <canvas id="myCanvas"></canvas>
        </div>
      </div>
    </>
  );
};
export default CanvasCom;
