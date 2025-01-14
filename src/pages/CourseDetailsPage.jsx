import { useParams } from 'react-router-dom';
import MainBranch from '../Btech/MainBranch'
import MBA from './MBA'
import BCA from './BCA'
import BSC from './BSC'
import LLB from './LLB'
function CourseDetailsPage() {
  const { courseId } = useParams();

  return (
    <div>
      {courseId === 'btech-computer-science' && <MainBranch />}
      {courseId === 'mba-marketing' && <MBA />}
      {courseId === 'bca-computer-applications' && <BCA />}
      {courseId === 'bsc-data-science' && <BSC />}
      {courseId === 'llb-law' && <LLB />}
    </div>
  );
}

export default CourseDetailsPage;
