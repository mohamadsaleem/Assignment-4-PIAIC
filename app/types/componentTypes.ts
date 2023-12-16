export type buttonProps = {
    title: string,
    description?: string,
    onClickHandler:()=>void,
    style?:string

};

export type tableProps = {
    name: string,
    gender: string,
    physics: number,
    maths: number,
    english: number,
}