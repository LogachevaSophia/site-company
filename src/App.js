import "./App.css";
import Filter from "./components/filter_sphere/filter-sphere";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from "./components/table/Table";
import axios from 'axios';
import BasketPage from "./components/BasketPage/BasketPage";




function App() {
  const arr_categoty = [
    {
      id: "car-maintenance",
      title: "Автосервис",
    },
    {
      id: "alcohol",
      title: "Алкоголь",
    },
    {
      id: "child-supplies",
      title: "Детские товары",
    },
    {
      id: "car-parts",
      title: "Автотовары",
    },
    {
      id: "analyzes",
      title: "Анализы",
    },
    {
      id: "pharmacy",
      title: "Аптеки, оптики, ортопедия",
    },
    {
      id: "banks",
      title: "Банки, финансы",
    },
    {
      id: "cosmetics",
      title: "Косметика, парфюмерия",
    },
    {
      id: "zoo-supplies",
      title: "Зоотовары",
    },
    {
      id: "cafe",
      title: "Кафе, рестораны, общепит",
    },
    {
      id: "bakery",
      title: "Пекарни, кондитерские магазиины",
    },
    {
      id: "food",
      title: "Продукты",
    },
    {
      id: "tobacco",
      title: "Табак",
    },
    {
      id: "electrical-goods",
      title: "Техника, электроника",
    },
    {
      id: "service",
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
      id: "beauty-salons",
      title: "Салоны красоты, медицина красоты",
    },
    {
      id: "sex-shop",
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
      id: "coworking",
      title: "Коворкинг",
    },
  ];

  const main = [
    {
      id: "sphere",
      title: "Cфера деятельности",
      
    },
    {
      id: "category",
      title: "Категория помещения",
    },
  ];

  const arr_sphere = [
    {
      id: "1m-20m",
      title: "Субаренда от 1 до 20 м",
      class: "home"
    },
    {
      id: "30m-100m",
      title: "ПВЗ, даркстор/китчен, офис от 30 до 100 м",
      class: "home"
    },
    {
      id: "15m-55m",
      title: "Высокий трафик, отдельный вход от 15 до 55 м",
      class: "home",
    },
    {
      id: "joint-entry-15m-55m",
      title: "Высокий трафик совместный вход / окно от 15 до 55 м",
      class: "home"
    },
    {
      id: "20m-90m",
      title: "Высокий трафик от 20 до 90 м",
      class: "home"
    },
    {
      id: "80m-160m",
      title: "Универсальное с высоким трафиком от 80 до 160 м",
      class: "home"
    },
    {
      id: "80m-150m",
      title: "Универсальное с низким трафиком/не первая линия от 80 до 150 м",
      class: "home"
    },
    {
      id: "120m-250m",
      title: "Универсальное с высоким трафиком от 120 до 250 м",
      class: "home"
    },
    {
      id: "low-traffic-120m-250m",
      title: "Универсальное с низким трафиком/не первая линия от 120 до 250 м",
      class: "home"
    },
    {
      id: "230m-380m",
      title: "Универсальное с высоким трафиком от 230 до 380 м",
      class: "home"
    },
    {
      id: "low-traffic-230m-380m",
      title: "Универсальное с низким трафиком/не первая линия от 230 до 380 м",
      class: "home"
    },
    {
      id: "retail-380m-800m",
      title: "Универсальное под ритейл от 380 до 800 м",
      class: "home"
    },
    {
      id: "no-retail-380m-800m",
      title: "Универсальное не под ритейл от 380 до 800 м",
      class: "home"
    },
    {
      id: "from-750m",
      title: "Очень большое от 750 м",
      class: "home"
    },
    {
      id: "non-obvious",
      title: "Неочевидного формата",
      class: "home"
    },
    {
      id: "purchase-of-premises",
      title: "Покупка помещений",
      class: "home"
    },
    {
      id: "car-traffic",
      title: "Автомобильный трафик",
      class: "home"
    }];



  return (
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Filter arr={main} main={true}/>}/>
      <Route path='/sphere' element={ <Filter arr={arr_categoty} />}/>
      <Route path='/category' element={ <Filter arr={arr_sphere} />}/>
      <Route path='/basket' element={ <BasketPage/>}/>
      {arr_categoty.map(function (el) {
        const path = '/category/'+el.id;
          return  <Route path={path} element={ <Table/>}/>;
        })}
       {arr_sphere.map(function (el) {
        const path = '/sphere/'+el.id;
          return  <Route path={path} element={ <Table/>}/>;
        })}
     

      
    </Routes>
    </BrowserRouter>
    
   

       
      </header>
    </div>
  );
}

export default App;
