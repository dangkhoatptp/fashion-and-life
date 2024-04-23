import styles from './Block.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Block({ children, styleBlock = {} }) {
    return (
        <div style={styleBlock} className={cx('wrapper')}>
            {children}
        </div>
    )
}

export default Block