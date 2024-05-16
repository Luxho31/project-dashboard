import { Outlet } from "react-router-dom";

const styles = {
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }
}

const AuthLayout = () => {
    return (
        <>
            <main style={styles.container}>
                <Outlet />
            </main>
        </>
    );
};

export default AuthLayout;
