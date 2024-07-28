import Link from "next/link";
import { formatAmount } from "../../../lib/utils";
import Image from "next/image";


const BankCard = ({account, userName, showBalance= true}:CreditCardProps) => {
    return (
        <div className="flex flex-col">
            <Link href="/" className="bank-card">
             <div className="bank-card_content">
                <div>
                    <h1 className="text-16 text-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-white font-semibold text-12">
                            {userName}
                        </h1>
                        <p className="text-white font-semibold text-12">
                        ●● / ●●
                        </p>
                    </div>
                    <p className="text-white text-16 font-semibold tracking-[1.1px] ">
                    ●●●● ●●●● ●●●● <span className="text-16">
                                1234
                        </span>
                    </p>
                </article>
             </div>
             <div className="bank-card_icon">
                <Image
                 src="/icons/Paypass.svg"
                 alt="pay"
                 height={24}
                 width={20}
                />
                <Image
                 src="/icons/mastercard.svg"
                 alt="mastercard"
                 width={45}
                 height={32}
                 className="ml-4"
                />
             </div>

             <Image
             src="/icons/lines.svg"
             alt="lines"
             width={316}
             height={190}
             className="top-0 right-0 absolute"
             />
            </Link>
        </div>
    );
};

export default BankCard;