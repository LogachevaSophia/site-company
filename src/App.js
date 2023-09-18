import "./App.css";
import Filter from "./components/filter_sphere/filter-sphere";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from "./components/table/Table";
import BasketPage from "./components/BasketPage/BasketPage";


function App() {
  const arr_sphere = [
    {
      id: "autoservice",
      title: "Автосервис",
    },
    {
      id: "alcohol",
      title: "Алкоголь",
    },
    {
      id: "child",
      title: "Детские товары",
    },
    {
      id: "autoproducts",
      title: "Автотовары",
    },
    {
      id: "analysis",
      title: "Анализы",
    },
    {
      id: "Pharmacies",
      title: "Аптеки, оптики, ортопедия",
    },
    {
      id: "bank",
      title: "Банки, финансы",
    },
    {
      id: "cosmetic",
      title: "Косметика, парфюмерия",
    },
    {
      id: "petSupplies",
      title: "Зоотовары",
    },
    {
      id: "cafe",
      title: "Кафе, рестораны, общепит",
    },
    {
      id: "bakeries",
      title: "Пекарни, кондитерские магазиины",
    },
    {
      id: "products",
      title: "Продукты",
    },
    {
      id: "tobacco",
      title: "Табак",
    },
    {
      id: "technic",
      title: "Техника, электроника",
    },
    {
      id: "services",
      title: "Услуги, быт",
    },
    {
      id: "furniture",
      title: "Хозтовары, ремонт, мебель",
    },
    {
      id: "delivery",
      title: "Пункты выдачи товаров",
    },
    {
      id: "beautySalon",
      title: "Салоны красоты, медицина красоты",
    },
    {
      id: "sexshop",
      title: "Сексшоп",
    },
    {
      id: "sport",
      title: "Спорт, здоровье",
    },
    {
      id: "flowers",
      title: "Цветы и подарки",
    },
    {
      id: "jewelry",
      title: "Ювелирки",
    },
    {
      id: "clothes",
      title: "Одежда, обувь, аксессуары",
    },
    {
      id: "medicine",
      title: "Медицина",
    },
    {
      id: "kovorking",
      title: "Коворкинг",
    },
  ];

  const main = [
    {
      id: "category",
      title: "Категория",
      
    },
    {
      id: "sphere",
      title: "Сфера",
    },
  ];

  

  const [state, setState] = useState(1);

  return (
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Filter arr={main} />}/>
      <Route path='/category' element={ <Filter arr={arr_sphere} />}/>
      <Route path='/basket' element={ <BasketPage/>}/>
      {arr_sphere.map(function (el) {
        const path = '/category/'+el.id;
          return  <Route path={path} element={ <Table/>}/>;
        })}
     

      
    </Routes>
    </BrowserRouter>
    
   

       
      </header>
    </div>
  );
}

export default App;
