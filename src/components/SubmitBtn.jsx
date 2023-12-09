import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
    const navigation = useNavigation();
    const submitting = navigation.state === "submitting";
    return (
        <button type='submit' className='btn btn-primary btn-block uppercase' disabled={submitting}>
            {submitting ? (
                <>
                    <span className='loading loading-spinner'>sending...</span>
                </>
            ) : (
                text || "submit"
            )}
        </button>
    );
};
export default SubmitBtn;
