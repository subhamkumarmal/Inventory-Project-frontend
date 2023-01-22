import '../../styles/models_page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faWarehouse, faUserSecret, faGears } from '@fortawesome/free-solid-svg-icons'
import MODELS_OBJECTS from './constants'
import { Routess } from '../Routers/Router'
export const ModelsPage = () => {
    const { MODELS = [] } = MODELS_OBJECTS
    const modelsPanales = (val) => {
        return (
            <div>
                <a href={`${val.link}`}>
                    <div className='pannel-label'>
                        <div>{val.label}</div>
                        <FontAwesomeIcon icon={val.icon} />
                    </div>
                </a>
            </div>
        )
    }
    return (
        <div className='panel-contents'>
            <div className='models-head-style'>
                {
                    MODELS.map((val) => {
                        return (modelsPanales(val))
                    })
                }
            </div>
            <div className='content-area'>
                <Routess />
            </div>

        </div>
    )
}

