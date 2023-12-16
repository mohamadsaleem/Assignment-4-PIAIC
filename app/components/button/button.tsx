"use client"
import { buttonProps } from "@/app/types/componentTypes";

export default function Button(props: buttonProps) {
  console.log("props", props.title);
  return (
    <button onClick={props.onClickHandler} className={props.style}>
      {props.title}
      {props.description !== null && props.description !== undefined
        ? props.description
        : null}
    </button>
  );
}
