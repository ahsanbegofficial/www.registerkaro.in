import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
    return <div className={`d-flex justify-content-center align-items-center pb-5 my-5 mb-5`}><Spinner animation="grow" /></div>
}
