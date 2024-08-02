import { FixedContainer } from "@/components";

import {
  Author,
  CourseStructure,
  Curriculum,
  FAQ,
  Feedback,
  ForWho,
  Hero,
  Invite,
  YourResults,
} from "@/components/courses";
import { ModalSignIn } from "@/components/courses/components/ModalSignIn";

export const metadata = {
  title: "code quality page",
};

export default function Page() {
  return (
    <>
      <Hero />
      <ForWho />
      <Author />
      <CourseStructure />
      <Feedback />
      <Invite />
      <YourResults />
      <Curriculum />
      <Invite />
      <FAQ />
      <FixedContainer />
    </>
  );
}
