import ContentDashboard from "../components/dashboard/content-dashboard/content-dashboard.tsx";
import HeaderDashboard from "../components/dashboard/header-dashboard/header-dashboard.tsx";
import SidebarDashboard from "../components/dashboard/sidebar-dashboard/sidebar-dashboard.tsx";

const styles = {
    container: {
        Position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bgColor1)",
        // overflow: "hidden",
    },

    content: {
        width: "82%",
        height: "100vh",
    },
};

const DashboardLayout = () => {
    return (
        <main style={styles.container}>
            <SidebarDashboard />
            <div style={styles.content}>
                <HeaderDashboard />
                <ContentDashboard />
            </div>
        </main>
    );
};

export default DashboardLayout;
