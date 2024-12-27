import { Route, Routes } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage';
// Test
import Test from 'src/pages/Test';
import AnimationTest from 'src/pages/Test/AnimationTest';
import TestButton from 'src/pages/Test/Button';
import TestCheckbox from 'src/pages/Test/Checkbox';
import TestInputs from 'src/pages/Test/Inputs';
import Table from 'src/pages/Test/Table';
import Tabs from 'src/pages/Test/Tabs';
import TestTextarea from 'src/pages/Test/TextArea';

export const TestRoutes = () => {
  return (
    <Routes>
      <Route path='test' element={<Test />} />
      <Route path='btn' element={<TestButton />} />
      <Route path='checkbox' element={<TestCheckbox />} />
      <Route path='inputs' element={<TestInputs />} />
      <Route path='textarea' element={<TestTextarea />} />
      <Route path='tabs' element={<Tabs />} />
      <Route path='table' element={<Table />} />
      <Route path='animation' element={<AnimationTest />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
