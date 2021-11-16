import moment from "moment";
import styles from "./timesection.module.css";

export default function TimeSection(props) {
    const { dateTime } = props
    const cleanDate = dateTime && moment(dateTime).format('MM-DD-YYYY HH:mm:ss')

    return (
        <div className={styles.textAqua}>
            <h2> {cleanDate ? cleanDate : 'LOADING...'}</h2>
        </div>
    )
}
