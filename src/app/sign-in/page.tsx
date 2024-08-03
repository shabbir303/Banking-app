import AuthForm from "@/components/ui/AuthForm";


const page = () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
           <AuthForm type="sign-in"/>
        </section>
    );
};

export default page;