import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";


const Home = () => {
    const loggedIn = {firstName:"Shabbir", lastName:"Hossain", email:"contact@shabbir.com"}
    return (
        <section className="home">
           <div className="home-content">
            <header className="home-header">
                <HeaderBox
                 type="greeting"
                 title="Welcome"
                 user={loggedIn?.firstName||"Guest"}
                 subtext="Access and manage account and transctions efficiently"   
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.25}
                />
            </header>
            Recent Transction
           </div>
           <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:123.50}, {currentBalance:500.00}]}  
  
           />
        </section>
    );
};

export default Home;