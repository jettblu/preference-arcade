import { Action, Direction } from "@/types";

export const clearBoard = (context: CanvasRenderingContext2D | null) => {
  if (context) {
    context.clearRect(0, 0, 1000, 600);
  }
};

export interface IObjectBody {
  x: number;
  y: number;
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillColor: string,
  strokeStyle = "#146356"
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      context.fillStyle = fillColor;
      context.strokeStyle = strokeStyle;
      context?.fillRect(object.x, object.y, 20, 20);
      context?.strokeRect(object.x, object.y, 20, 20);
    });
  }
};

function randomNumber(min: number, max: number) {
  let random = Math.random() * max;
  return random - (random % 20);
}
export const generateRandomPosition = (width: number, height: number) => {
  return {
    x: randomNumber(0, width),
    y: randomNumber(0, height),
  };
};

export const hasSnakeCollided = (
  snake: IObjectBody[],
  currentHeadPos: IObjectBody
) => {
  let flag = false;
  snake.forEach((pos: IObjectBody, index: number) => {
    if (
      pos.x === currentHeadPos.x &&
      pos.y === currentHeadPos.y &&
      index !== 0
    ) {
      flag = true;
    }
  });

  return flag;
};

export function isRight(key: string) {
  return key === "ArrowRight" || key === "d";
}

export function isLeft(key: string) {
  return key === "ArrowLeft" || key === "a";
}

export function isUp(key: string) {
  return key === "ArrowUp" || key === "w";
}

export function isDown(key: string) {
  return key === "ArrowDown" || key === "s";
}

// returns action so that left represents any counter clockwise action and right represents any clockwise action
export function getAction(key: string, disDirection: string): Action {
  disDirection = disDirection.toLowerCase();
  if (isUp(key) && disDirection == "right") {
    return "right";
  }
  if (isDown(key) && disDirection == "right") {
    return "left";
  }
  if (isDown(key) && disDirection == "left") {
    return "right";
  }
  if (isUp(key) && disDirection == "left") {
    return "left";
  }
  if (isLeft(key) && disDirection == "up") {
    return "left";
  }
  if (isRight(key) && disDirection == "up") {
    return "left";
  }
  if (isRight(key) && disDirection == "down") {
    return "right";
  }
  if (isLeft(key) && disDirection == "down") {
    return "left";
  }

  return "none";
}

export function reverseDirection(direction: string): Direction {
  direction = direction.toLowerCase();
  if (direction === "up") {
    return "down";
  }
  if (direction === "down") {
    return "up";
  }
  if (direction === "left") {
    return "right";
  }
  if (direction === "right") {
    return "left";
  }
  // should not happen
  return "up";
}
