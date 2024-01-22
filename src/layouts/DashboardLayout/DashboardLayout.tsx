import AppHeader from 'components/Global/AppHeader';
import { DashboardLayoutWrapper, MainContent } from './dashboardLayout.styles';
import 'react-responsive-modal/styles.css';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  // states
  return (
    <DashboardLayoutWrapper>
      <AppHeader />
      <MainContent>{children}</MainContent>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
