import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";


const Home = () => {
    const loggedIn = {firstName:"Shabbir"}
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
           </div>
        </section>
    );
};

export default Home;