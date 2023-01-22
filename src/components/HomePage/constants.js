import {faUsers, faWarehouse, faUserSecret, faGears} from '@fortawesome/free-solid-svg-icons'
const MODELS_OBJECTS = {}

MODELS_OBJECTS.MODELS = [
    {value: '1', label: 'Admin', icon: faUserSecret, link: 'admin'},
    {value: '2', label: 'Inventory', icon: faWarehouse, link: 'addInventory'},
    {value: '3', label: 'Users', icon: faUsers, link: 'users'},
    {value: '4', label: 'Settings', icon: faGears, link: 'settings'}
]

export default MODELS_OBJECTS;