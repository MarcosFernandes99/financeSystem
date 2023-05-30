
import { InputArea } from '../components/inputArea/InputArea'
import { Details } from '../components/details/Details'
import { useState } from 'react';
import { DadosType } from '../types/dados.interface';
import { InfoArea } from '../components/infoArea/InfoArea';

export const Home = () => {

  const [dataList, setDataList] = useState<DadosType[]>([]);

  const handleAddData = (data: any) => {
    setDataList((prevDataList) => [...prevDataList, data]);
  };


  return (
    <>
      <div>
        <InfoArea dados={dataList}/>
        <InputArea onAdd={handleAddData} />
        <Details dados={dataList} />
      </div>
    </>
  )
}
