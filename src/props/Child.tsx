interface ChildProps{
    color: string;
    onClick: () => void;
}

// export const Child = ({color}: ChildProps) => {
//     return <div>hey there</div>
// };

export const Child: React.FC<ChildProps> = ({color,onClick,children})=>{
    return (
        <div>
            ({color})
            {children}
            <button onClick={onClick}>Click me</button>
            </div>
        )
}