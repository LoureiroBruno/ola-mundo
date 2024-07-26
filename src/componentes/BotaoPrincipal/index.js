import styles from './BotaoPrincipal.module.css';
import { Tooltip } from 'react-tooltip';

export default function BotaoPrincipal({title, children, tamanho}) {
    return (
        <>
            <button
                data-tooltip-id="tooltip-id" 
                data-tooltip-content={title}

                className={`
                    ${styles.botaoPrincipal}
                    ${styles[tamanho]}
                `} 
            > 
                {children} 
            </button>
            <Tooltip id="tooltip-id" /> 
        </>
    );
}