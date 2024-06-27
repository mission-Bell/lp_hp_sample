import WorkList from "@/components/workList/workList";
import ProfileBlock from "@/components/profileBlock/profileBlock";
import SnsList from "@/components/snsList/snsList";
import ContactForm from "@/components/contactForm/contactForm";

export default function MainPage() {
  return (
    <div className="h-screen p-10">
      <WorkList />
      <ProfileBlock />
      <SnsList />
      <ContactForm />
    </div>
    

  );
}
