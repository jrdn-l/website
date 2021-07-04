import Button from './Button'

const Tldr = ({ tldr, expanded, onClick, visible }) => {
    return (
        <div>
            {visible ? <div>
                <p>{tldr}</p>
                <Button title='No TLDR' onClick={onClick} />
            </div> : <div>
                <p>{expanded}</p>
                <Button title='TLDR' onClick={onClick}/>
            </div>
            }
        </div>
    )
}

export default Tldr
