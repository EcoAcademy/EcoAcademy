import { useState } from 'react';
import UploadForm from '../components/UploadForm';
//import ModelViewer from '../components/ModelViewer';

const Home: React.FC = () => {
  const [modelPath, setModelPath] = useState<string | null>(null);

  return (
    <div>
      <UploadForm />
      {/* {modelPath && <ModelViewer modelPath={modelPath} />} */}
    </div>
  );
};

export default Home;
