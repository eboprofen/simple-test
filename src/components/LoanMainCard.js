import React, { useState } from "react";
import rightArrow from "../assets/ic_right_arrow.png";
import rightArrowWhite from "../assets/ic_right_arrow_white.png";
import { Button } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import dropdownIcon from "../assets/ic_dropdown.png";
import {
  InputAdornment,
  TextField,
  Input,
  Divider,
  MenuItem,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import editIcon from "../assets/ic_edit.png";
import { OfferModal } from "./OfferModal";
import deleteIcon from "../assets/ic_delete.png";
import { produce } from "immer";
import * as api from "../api";
import openIcon from "../assets/ic_qa_open.png";
import { ErrorModal } from "./ErrorModal";

const occupationData = [
  {
    id: 1,
    name: "Аялал жуулчлал",
    data: [
      {
        id: 1,
        name: "Аялал, жуулчлалын агентлаг, аялалын оператор",
        margin: "0.2",
      },
      { id: 2, name: "Жуулчны бааз, амралтын газар", margin: "0.2" },
      { id: 3, name: "Аялал жуулчлалын бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 2,
    name: "Барилга",
    data: [
      {
        id: 4,
        name: "Архитектур болон инженерийн үйл ажиллагаа",
        margin: "0.2",
      },
      {
        id: 5,
        name: "Барилга угсралтын үйл ажиллагаа",
        margin: "0.15",
      },
      {
        id: 6,
        name:
          "Барилгын тусгай үйл ажиллагаа буюу туслан гүйцэтгэх үйл ажиллагаа",
        margin: "0.2",
      },
      {
        id: 7,
        name: "Барилгын бусад үйл ажиллагаа",
        margin: "0.15",
      },
    ],
  },
  {
    id: 3,
    name: "Боловсрол",
    data: [
      { id: 8, name: "Их, дээд сургууль", margin: "0.3" },
      { id: 9, name: "Сургалтын төв", margin: "0.3" },
      { id: 10, name: "Хувийн цэцэрлэг болон дунд сургууль", margin: "0.3" },
      { id: 11, name: "Боловсролын бусад үйл ажиллагаа", margin: "0.3" },
    ],
  },
  {
    id: 4,
    name: "Газар тариалан, мал аж ахуй",
    data: [
      { id: 12, name: "Газар тариалан", margin: "0.23" },
      { id: 13, name: "Мал аж ахуй", margin: "0.2" },
      { id: 14, name: "Бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 5,
    name: "Мэдээлэл, технологи",
    data: [
      { id: 15, name: "Компьютер програмчилал, зөвлөгөө", margin: "0.3" },
      {
        id: 16,
        name: "Мэдээллээр үйлчлэх үйл ажиллагаа болон лавлах төв үйлчилгээ",
        margin: "0.3",
      },
      {
        id: 17,
        name: "Мэргэжлийн, шинжлэх ухаан болон техникийн үйл ажиллагаа",
        margin: "0.3",
      },
      { id: 18, name: "Мэдээлэл, харилцаа холбоо", margin: "0.2" },
      { id: 19, name: "Бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 6,
    name: "Санхүүгийн үйлчилгээ",
    data: [
      { id: 20, name: "Аудитын компани", margin: "0.4" },
      { id: 21, name: "Брокер, дилерийн компани", margin: "0.15" },
      { id: 22, name: "Даатгалын байгууллага", margin: "0.2" },
      {
        id: 23,
        name: "Санхүүгийн зөвлөх үйлчилгээний байгууллага",
        margin: "0.3",
      },
      {
        id: 24,
        name: "Сурталчилгааны ажил, зах зээлийн судалгаа",
        margin: "0.3",
      },
      {
        id: 25,
        name: "Хөрөнгө оруулалтын сан, х.оруулалтын менежмент-ком",
        margin: "0.2",
      },
      {
        id: 26,
        name: "Санхүүгийн түрээсийн болон лизингийн үйл ажиллагаа",
        margin: "0.15",
      },
      { id: 27, name: "Банк болон ББСБ", margin: "0.2" },
      { id: 28, name: "Бусад үйл ажиллагаа", margin: "0.15" },
    ],
  },
  {
    id: 7,
    name: "Соёл урлаг, спорт",
    data: [
      {
        id: 29,
        name: "Спорт, зугаа цэнгэл, чөлөөт цагийн үйл ажиллагаа",
        margin: "0.5",
      },
      { id: 30, name: "Урлаг, соёлын байгууллага", margin: "0.4" },
      { id: 31, name: "Бусад үйл ажиллагаа", margin: "0.4" },
    ],
  },
  {
    id: 8,
    name: "Уул уурхай",
    data: [
      { id: 32, name: "Газрын тос олборлолт", margin: "0.2" },
      { id: 33, name: "Металл олборлолт", margin: "0.2" },
      { id: 34, name: "Нүүрс олборлолт", margin: "0.2" },
      {
        id: 35,
        name: "Уул уурхай, олборлолтын туслах үйл ажиллагаа",
        margin: "0.2",
      },
      { id: 36, name: "Бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 9,
    name: "Үйлдвэрлэл",
    data: [
      {
        id: 37,
        name: "Цаас болон цаасан бүтээгдэхүүний үйлдвэрлэл",
        margin: "0.15",
      },
      {
        id: 38,
        name: "Мах, загас, жимс, ногоо, өөх, тос боловсруулах үйлдвэр",
        margin: "0.25",
      },
      { id: 39, name: "Металл үйлдвэрлэл", margin: "0.25" },
      { id: 40, name: "Мод, модон эдлэл үйлдвэрлэл", margin: "0.3" },
      { id: 41, name: "Нэхмэлийн үйлдвэрлэл", margin: "0.3" },
      { id: 42, name: "Согтууруулах ундаа үйлдвэрлэл", margin: "0.3" },
      { id: 43, name: "Сүү, сүүн бүтээгдэхүүн үйлдвэрлэл", margin: "0.15" },
      { id: 44, name: "Тавилга үйлдвэрлэл", margin: "0.25" },
      {
        id: 45,
        name: "Тавилгаас бусад мод болон модон бүтээгдэхүүний үйлдвэрлэл",
        margin: "0.25",
      },
      { id: 46, name: "Тамхины үйлдвэрлэл", margin: "0.3" },
      {
        id: 47,
        name: "Тээврийн хэрэгслийн бусад тоног төхөөрөмж үйлдвэрлэл",
        margin: "0.2",
      },
      { id: 48, name: "Ундаа үйлдвэрлэл", margin: "0.2" },
      {
        id: 49,
        name: "Үр тарианы гурил, цардуул, малын тэжээл үйлдвэрлэл",
        margin: "0.2",
      },
      {
        id: 50,
        name: "Хими, химийн төрлийн бүтээгдэхүүний үйлдвэрлэл",
        margin: "0.2",
      },
      {
        id: 51,
        name: "Хувцас үйлдвэрлэл, үслэг арьс боловсруулалт",
        margin: "0.2",
      },
      { id: 52, name: "Хүнсний бүтээгдэхүүн үйлдвэрлэл", margin: "0.3" },
      { id: 53, name: "Хүнсний бусад бүтээгдэхүүн үйлдвэрлэл", margin: "0.3" },
      { id: 54, name: "Арьс, арьсан бүтээгдэхүүн үйлдвэрлэл", margin: "0.3" },
      {
        id: 55,
        name: "Арьс, шир боловсрлах, ширэн эдлэл, гутал үйлдвэрлэл",
        margin: "0.3",
      },
      { id: 56, name: "Хүнсний бүтээгдэхүүний үйлдвэрлэл", margin: "0.2" },
      {
        id: 57,
        name: "Цахилгаан тоног төхөөрөмжийн үйлдвэрлэл",
        margin: "0.2",
      },
      {
        id: 58,
        name: "Цахилгаан, хий, уур, агааржуулалтын хангамж",
        margin: "0.2",
      },
      { id: 59, name: "Бусад үйлдвэрлэл", margin: "0.2" },
    ],
  },
  {
    id: 10,
    name: "Харуул хамгаалалт",
    data: [
      {
        id: 60,
        name: "Аюулгүй байдал, хувийн болон гэрээт харуул",
        margin: "0.4",
      },
      { id: 61, name: "Бусад үйл ажиллагаа", margin: "0.4" },
    ],
  },
  {
    id: 11,
    name: "Худалдаа, үйлчилгээ",
    data: [
      {
        id: 62,
        name: "Авто машин, мотоциклийн сэлбэгийн худалдаа",
        margin: "0.25",
      },
      { id: 63, name: "Авто машин, мотоциклийн худалдаа ", margin: "0.25" },
      {
        id: 64,
        name: "Машин, тоног төхөөрөмжийн угсралт, суурилуулалт",
        margin: "0.25",
      },
      { id: 65, name: "Авто засварын үйлчилгээ", margin: "0.2" },
      { id: 66, name: "Бэлэн хувцасны худалдаа", margin: "0.4" },
      {
        id: 67,
        name:
          "Гоо сайхан болон ахуйн хэрэглээний бүтээгдэхүүний бөөний худалдаа",
        margin: "0.3",
      },
      { id: 68, name: "Гоо сайхан болон үсчин", margin: "0.35" },
      { id: 69, name: "Гэрэл зургийн үйлчилгээ", margin: "0.3" },
      {
        id: 70,
        name:
          "Зоогийн газар, цайны газар болон хоол хүнсээр үйлчлэх үйл ажиллагаа",
        margin: "0.3",
      },
      { id: 71, name: "Зочид буудал, зоогийн газар", margin: "0.3" },
      {
        id: 72,
        name: "Тээвэр, тээвэр зууч, агуулахын үйлчилгээ",
        margin: "0.3",
      },
      {
        id: 73,
        name: "Үл хөдлөх хөрөнгө худалдаа, зуучлал, түрээс",
        margin: "0.05",
      },
      {
        id: 74,
        name: "Хог, хаягдлын менежментийн бусад үйл ажиллагаа",
        margin: "0.2",
      },
      { id: 75, name: "Хүнсний бүтээгдэхүүний бөөний худалдаа", margin: "0.1" },
      {
        id: 76,
        name: "Хүнсний бүтээгдэхүүний жижиглэн худалдаа",
        margin: "0.12",
      },
      { id: 77, name: "Цахилгаан барааны засвар үйлчилгээ", margin: "0.3" },
      { id: 78, name: "Цахилгаан барааны худалдаа", margin: "0.25" },
      { id: 79, name: "Бичиг хэргийн хэрэгсэлийн худалдаа", margin: "0.25" },
      { id: 80, name: "Оёдол, хувцас засвар", margin: "0.4" },
      { id: 84, name: "Бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 12,
    name: "Хуулийн зөвлөгөө, үйлчилгээ",
    data: [
      { id: 85, name: "Нотариат", margin: "0.2" },
      { id: 86, name: "Өмгөөлөгч", margin: "0.4" },
      { id: 87, name: "Хууль зүйн үйлчилгээ", margin: "0.4" },
      { id: 88, name: "Бусад үйлчилгээ", margin: "0.2" },
    ],
  },
  {
    id: 13,
    name: "Хэвлэл мэдээлэл",
    data: [
      {
        id: 89,
        name: "Бүтээл туурвих, урлаг, үзвэр үйлчилгээний үйл ажиллагаа",
        margin: "0.3",
      },
      {
        id: 90,
        name: "Кино, видео, телевизийн хөтөлбөрийн үйлдвэрлэл",
        margin: "0.2",
      },
      {
        id: 91,
        name: "Өргөн нэвтрүүлэг бэлтгэх, дамжуулах үйл ажиллагаа",
        margin: "0.15",
      },
      {
        id: 92,
        name: "Хэвлэх, дуу бичлэгийн хувилах, дахин үйлдвэрлэх ",
        margin: "0.2",
      },
      { id: 93, name: "Эх бэлтгэх, нийтлэх үйл ажиллагаа", margin: "0.3" },
      { id: 94, name: "Бусад үйл ажиллагаа", margin: "0.2" },
    ],
  },
  {
    id: 14,
    name: "Эмнэлэг, эм",
    data: [
      { id: 95, name: "Хүний эрүүл мэндийн үйл ажиллагаа", margin: "0.3" },
      { id: 96, name: "Мал эмнэлгийн үйл ажиллагаа", margin: "0.3" },
      {
        id: 97,
        name: "Эм, эм бэлдмэл, химийн болон ургамлын гаралтай эмийн үйлдвэрлэл",
        margin: "0.2",
      },
      { id: 98, name: "Эмийн сан", margin: "0.3" },
      { id: 99, name: "Малын эмийн сан", margin: "0.4" },
      { id: 100, name: "Бусад үйл ажиллагаа", margin: "0.3" },
    ],
  },
];

const states = [
  {
    locationvalue: "11",
    locationtext: "Улаанбаатар",
    data: [
      { locationvalue: "111", locationtext: "Багануур" },
      { locationvalue: "1110", locationtext: "Баянзүрх" },
      { locationvalue: "1113", locationtext: "Налайх" },
      { locationvalue: "1116", locationtext: "Сонгинохайрхан" },
      { locationvalue: "117", locationtext: "Баянгол" },
      { locationvalue: "1122", locationtext: "Хан-Уул" },
      { locationvalue: "1125", locationtext: "Чингэлтэй" },
      { locationvalue: "114", locationtext: "Багахангай" },
      { locationvalue: "1119", locationtext: "Сүхбаатар" },
    ],
  },
  // {
  //   locationvalue: "65",
  //   locationtext: "Архангай",
  //   data: [
  //     { locationvalue: "651", locationtext: "Эрдэнэбулган" },
  //     { locationvalue: "657", locationtext: "Булган" },
  //     { locationvalue: "6513", locationtext: "Их Тамир" },
  //     { locationvalue: "6516", locationtext: "Өгийнуур" },
  //     { locationvalue: "6519", locationtext: "Өлзийт" },
  //     { locationvalue: "6522", locationtext: "Өндөр-Улаан" },
  //     { locationvalue: "6525", locationtext: "Тариат" },
  //     { locationvalue: "6528", locationtext: "Төвшрүүлэх" },
  //     { locationvalue: "6531", locationtext: "Хайрхан" },
  //     { locationvalue: "6534", locationtext: "Хангай" },
  //     { locationvalue: "6537", locationtext: "Хашаат" },
  //     { locationvalue: "654", locationtext: "Батцэнгэл" },
  //     { locationvalue: "6540", locationtext: "Хотонт" },
  //     { locationvalue: "6543", locationtext: "Цахир" },
  //     { locationvalue: "6546", locationtext: "Цэнхэр" },
  //     { locationvalue: "6549", locationtext: "Цэцэрлэг" },
  //     { locationvalue: "6552", locationtext: "Чулуут" },
  //     { locationvalue: "6555", locationtext: "Эрдэнэмандал" },
  //     { locationvalue: "6510", locationtext: "Жаргалант" },
  //   ],
  // },
  // {
  //   locationvalue: "83",
  //   locationtext: "Баян-Өлгий",
  //   data: [
  //     { locationvalue: "831", locationtext: "Өлгий" },
  //     { locationvalue: "8310", locationtext: "Баяннуур" },
  //     { locationvalue: "8313", locationtext: "Бугат" },
  //     { locationvalue: "8316", locationtext: "Булган" },
  //     { locationvalue: "8319", locationtext: "Буянт" },
  //     { locationvalue: "8322", locationtext: "Дэлүүн" },
  //     { locationvalue: "837", locationtext: "Алтанцөгц" },
  //     { locationvalue: "8328", locationtext: "Сагсай" },
  //     { locationvalue: "8331", locationtext: "Толбо" },
  //     { locationvalue: "8334", locationtext: "Улаанхус" },
  //     { locationvalue: "8337", locationtext: "Цэнгэл" },
  //     { locationvalue: "834", locationtext: "Алтай" },
  //     { locationvalue: "8325", locationtext: "Ногооннуур" },
  //   ],
  // },
  // {
  //   locationvalue: "64",
  //   locationtext: "Баянхонгор",
  //   data: [
  //     { locationvalue: "641", locationtext: "Баянхонгор" },
  //     { locationvalue: "647", locationtext: "Баянбулаг" },
  //     { locationvalue: "6413", locationtext: "Баянлиг" },
  //     { locationvalue: "6416", locationtext: "Баян-Овоо" },
  //     { locationvalue: "6419", locationtext: "Баян-Өндөр" },
  //     { locationvalue: "6422", locationtext: "Баянцагаан" },
  //     { locationvalue: "6425", locationtext: "Богд" },
  //     { locationvalue: "6428", locationtext: "Бөмбөгөр" },
  //     { locationvalue: "6431", locationtext: "Бууцагаан" },
  //     { locationvalue: "6434", locationtext: "Галуут" },
  //     { locationvalue: "6437", locationtext: "Гурванбулаг" },
  //     { locationvalue: "644", locationtext: "Баацагаан" },
  //     { locationvalue: "6440", locationtext: "Жаргалант" },
  //     { locationvalue: "6443", locationtext: "Жинст" },
  //     { locationvalue: "6446", locationtext: "Заг" },
  //     { locationvalue: "6449", locationtext: "Өлзийт" },
  //     { locationvalue: "6452", locationtext: "Хүрээмарал" },
  //     { locationvalue: "6455", locationtext: "Шинэжинст" },
  //     { locationvalue: "6458", locationtext: "Эрдэнэцогт" },
  //     { locationvalue: "6410", locationtext: "Баянговь" },
  //   ],
  // },
  // {
  //   locationvalue: "63",
  //   locationtext: "Булган",
  //   data: [
  //     { locationvalue: "631", locationtext: "Булган" },
  //     { locationvalue: "637", locationtext: "Баяннуур" },
  //     { locationvalue: "6313", locationtext: "Бүрэгхангай" },
  //     { locationvalue: "6316", locationtext: "Гурван Булаг" },
  //     { locationvalue: "6319", locationtext: "Дашинчилэн" },
  //     { locationvalue: "6322", locationtext: "Могод" },
  //     { locationvalue: "6325", locationtext: "Орхон" },
  //     { locationvalue: "6328", locationtext: "Рашаант" },
  //     { locationvalue: "6331", locationtext: "Сайхан" },
  //     { locationvalue: "6334", locationtext: "Сэлэнгэ" },
  //     { locationvalue: "6337", locationtext: "Тэшиг" },
  //     { locationvalue: "634", locationtext: "Баян-Агт" },
  //     { locationvalue: "6340", locationtext: "Хангал" },
  //     { locationvalue: "6343", locationtext: "Хишиг-Өндөр" },
  //     { locationvalue: "6346", locationtext: "Хутаг-Өндөр" },
  //     { locationvalue: "6310", locationtext: "Бугат" },
  //   ],
  // },
  // {
  //   locationvalue: "82",
  //   locationtext: "Говь-Алтай",
  //   data: [
  //     { locationvalue: "821", locationtext: "Есөнбулаг" },
  //     { locationvalue: "827", locationtext: "Баян-Уул" },
  //     { locationvalue: "8213", locationtext: "Бугат" },
  //     { locationvalue: "8216", locationtext: "Дарив" },
  //     { locationvalue: "8219", locationtext: "Дэлгэр" },
  //     { locationvalue: "8222", locationtext: "Жаргалан" },
  //     { locationvalue: "8225", locationtext: "Тайшир" },
  //     { locationvalue: "8228", locationtext: "Тонхил" },
  //     { locationvalue: "8231", locationtext: "Төгрөг" },
  //     { locationvalue: "8234", locationtext: "Халиун" },
  //     { locationvalue: "8237", locationtext: "Хөхморьт" },
  //     { locationvalue: "824", locationtext: "Алтай" },
  //     { locationvalue: "8240", locationtext: "Цогт" },
  //     { locationvalue: "8243", locationtext: "Цээл" },
  //     { locationvalue: "8246", locationtext: "Чандмань" },
  //     { locationvalue: "8249", locationtext: "Шарга" },
  //     { locationvalue: "8252", locationtext: "Эрдэнэ" },
  //     { locationvalue: "8210", locationtext: "Бигэр" },
  //   ],
  // },
  // {
  //   locationvalue: "42",
  //   locationtext: "Говьсүмбэр",
  //   data: [
  //     { locationvalue: "421", locationtext: "Сүмбэр" },
  //     { locationvalue: "427", locationtext: "Шивээговь" },
  //     { locationvalue: "424", locationtext: "Баянтал" },
  //   ],
  // },
  // {
  //   locationvalue: "45",
  //   locationtext: "Дархан-Уул",
  //   data: [
  //     { locationvalue: "451", locationtext: "Дархан" },
  //     { locationvalue: "457", locationtext: "Хонгор" },
  //     { locationvalue: "454", locationtext: "Орхон" },
  //     { locationvalue: "4510", locationtext: "Шарын Гол" },
  //   ],
  // },
  // {
  //   locationvalue: "44",
  //   locationtext: "Дорноговь",
  //   data: [
  //     { locationvalue: "441", locationtext: "Сайншанд" },
  //     { locationvalue: "4410", locationtext: "Даланжаргалан" },
  //     { locationvalue: "4413", locationtext: "Дэлгэрэх" },
  //     { locationvalue: "4416", locationtext: "Замын-Үүд" },
  //     { locationvalue: "4419", locationtext: "Иххэт" },
  //     { locationvalue: "4422", locationtext: "Мандах" },
  //     { locationvalue: "447", locationtext: "Алтанширээ" },
  //     { locationvalue: "4428", locationtext: "Сайхандулаан" },
  //     { locationvalue: "4431", locationtext: "Улаанбадрах" },
  //     { locationvalue: "4434", locationtext: "Хатанбулаг" },
  //     { locationvalue: "4437", locationtext: "Хөвсгөл" },
  //     { locationvalue: "444", locationtext: "Айраг" },
  //     { locationvalue: "4440", locationtext: "Эрдэнэ" },
  //     { locationvalue: "4425", locationtext: "Өргөн" },
  //   ],
  // },
  // {
  //   locationvalue: "21",
  //   locationtext: "Дорнод",
  //   data: [
  //     { locationvalue: "211", locationtext: "Хэрлэн" },
  //     { locationvalue: "2110", locationtext: "Баян-Уул" },
  //     { locationvalue: "2113", locationtext: "Булган" },
  //     { locationvalue: "2116", locationtext: "Гурванзагал" },
  //     { locationvalue: "2119", locationtext: "Дашбалбар" },
  //     { locationvalue: "2122", locationtext: "Матад" },
  //     { locationvalue: "217", locationtext: "Баянтүмэн" },
  //     { locationvalue: "2128", locationtext: "Халхгол" },
  //     { locationvalue: "2131", locationtext: "Хөлөнбуйр" },
  //     { locationvalue: "2134", locationtext: "Цагаан-Овоо" },
  //     { locationvalue: "2137", locationtext: "Чойбалсан" },
  //     { locationvalue: "214", locationtext: "Баяндун" },
  //     { locationvalue: "2140", locationtext: "Чулуунхороот" },
  //     { locationvalue: "2125", locationtext: "Сэргэлэн" },
  //   ],
  // },
  // {
  //   locationvalue: "48",
  //   locationtext: "Дундговь",
  //   data: [
  //     { locationvalue: "481", locationtext: "Сайнцагаан" },
  //     { locationvalue: "487", locationtext: "Баянжаргалан" },
  //     { locationvalue: "4813", locationtext: "Гурвансайхан" },
  //     { locationvalue: "4816", locationtext: "Дэлгэрхангай" },
  //     { locationvalue: "4819", locationtext: "Дэлгэрцогт" },
  //     { locationvalue: "4822", locationtext: "Дэрэн" },
  //     { locationvalue: "4825", locationtext: "Луус" },
  //     { locationvalue: "4828", locationtext: "Өлзийт" },
  //     { locationvalue: "4831", locationtext: "Өндөршил" },
  //     { locationvalue: "4834", locationtext: "Сайхан-Овоо" },
  //     { locationvalue: "4837", locationtext: "Хулд" },
  //     { locationvalue: "484", locationtext: "Адаацаг" },
  //     { locationvalue: "4840", locationtext: "Цагаандэлгэр" },
  //     { locationvalue: "4843", locationtext: "Эрдэнэдалай" },
  //     { locationvalue: "4810", locationtext: "Говь-Угтаал" },
  //   ],
  // },
  // {
  //   locationvalue: "81",
  //   locationtext: "Завхан",
  //   data: [
  //     { locationvalue: "811", locationtext: "Улиастай" },
  //     { locationvalue: "8170", locationtext: "Яруу" },
  //     { locationvalue: "8113", locationtext: "Баянхайрхан" },
  //     { locationvalue: "8116", locationtext: "Дөрвөлжин" },
  //     { locationvalue: "8119", locationtext: "Завханмандал" },
  //     { locationvalue: "8122", locationtext: "Идэр" },
  //     { locationvalue: "8125", locationtext: "Их-Уул" },
  //     { locationvalue: "8128", locationtext: "Нөмрөг" },
  //     { locationvalue: "8131", locationtext: "Отгон" },
  //     { locationvalue: "8134", locationtext: "Сантмаргац" },
  //     { locationvalue: "8137", locationtext: "Сонгино" },
  //     { locationvalue: "814", locationtext: "Алдархаан" },
  //     { locationvalue: "8140", locationtext: "Тосонцэнгэл" },
  //     { locationvalue: "8143", locationtext: "Түдэвтэй" },
  //     { locationvalue: "8146", locationtext: "Тэлмэн" },
  //     { locationvalue: "8149", locationtext: "Тэс" },
  //     { locationvalue: "8152", locationtext: "Ургамал" },
  //     { locationvalue: "8155", locationtext: "Цагаанхайрхан" },
  //     { locationvalue: "8158", locationtext: "Цагаанчулуут" },
  //     { locationvalue: "8161", locationtext: "Цэцэн-Уул" },
  //     { locationvalue: "8164", locationtext: "Шилүүстэй" },
  //     { locationvalue: "8167", locationtext: "Эрдэнэхайрхан" },
  //     { locationvalue: "817", locationtext: "Асгат" },
  //     { locationvalue: "8110", locationtext: "Баянтэс" },
  //   ],
  // },
  // {
  //   locationvalue: "61",
  //   locationtext: "Орхон",
  //   data: [
  //     { locationvalue: "614", locationtext: "Жаргалант" },
  //     { locationvalue: "611", locationtext: "Баян-Өндөр" },
  //   ],
  // },
  // {
  //   locationvalue: "43",
  //   locationtext: "Сэлэнгэ",
  //   data: [
  //     { locationvalue: "431", locationtext: "Сүхбаатар" },
  //     { locationvalue: "437", locationtext: "Баруунбүрэн" },
  //     { locationvalue: "4313", locationtext: "Ерөө" },
  //     { locationvalue: "4316", locationtext: "Жавхлант" },
  //     { locationvalue: "4319", locationtext: "Зүүнбүрэн" },
  //     { locationvalue: "4322", locationtext: "Мандал" },
  //     { locationvalue: "4325", locationtext: "Орхон" },
  //     { locationvalue: "4328", locationtext: "Орхонтуул" },
  //     { locationvalue: "4331", locationtext: "Сайхан" },
  //     { locationvalue: "4334", locationtext: "Сант" },
  //     { locationvalue: "4337", locationtext: "Түшиг" },
  //     { locationvalue: "434", locationtext: "Алтанбулаг" },
  //     { locationvalue: "4340", locationtext: "Хүдэр" },
  //     { locationvalue: "4343", locationtext: "Хушаат" },
  //     { locationvalue: "4346", locationtext: "Цагааннуур" },
  //     { locationvalue: "4349", locationtext: "Шаамар" },
  //     { locationvalue: "4310", locationtext: "Баянгол" },
  //   ],
  // },
  // {
  //   locationvalue: "22",
  //   locationtext: "Сүхбаатар",
  //   data: [
  //     { locationvalue: "221", locationtext: "Баруун-Урт" },
  //     { locationvalue: "2210", locationtext: "Дарьганга" },
  //     { locationvalue: "2213", locationtext: "Мөнххаан" },
  //     { locationvalue: "2216", locationtext: "Наран" },
  //     { locationvalue: "2219", locationtext: "Онгон" },
  //     { locationvalue: "2222", locationtext: "Сүхбаатар" },
  //     { locationvalue: "227", locationtext: "Баяндэлгэр" },
  //     { locationvalue: "2228", locationtext: "Түмэнцогт" },
  //     { locationvalue: "2231", locationtext: "Уулбаян" },
  //     { locationvalue: "2234", locationtext: "Халзан" },
  //     { locationvalue: "2237", locationtext: "Эрдэнэцагаан" },
  //     { locationvalue: "224", locationtext: "Асгат" },
  //     { locationvalue: "2225", locationtext: "Түвшинширээ" },
  //   ],
  // },
  // {
  //   locationvalue: "41",
  //   locationtext: "Төв",
  //   data: [
  //     { locationvalue: "411", locationtext: "Зуунмод" },
  //     { locationvalue: "4179", locationtext: "Эрдэнэсант" },
  //     { locationvalue: "4113", locationtext: "Батсүмбэр" },
  //     { locationvalue: "4116", locationtext: "Баян" },
  //     { locationvalue: "4119", locationtext: "Баяндэлгэр" },
  //     { locationvalue: "4122", locationtext: "Баянжаргалан" },
  //     { locationvalue: "4125", locationtext: "Баян-Өнжүүл" },
  //     { locationvalue: "4128", locationtext: "Баянхангай" },
  //     { locationvalue: "4131", locationtext: "Баянцагаан" },
  //     { locationvalue: "4134", locationtext: "Баянцогт" },
  //     { locationvalue: "4137", locationtext: "Баянчандмань" },
  //     { locationvalue: "414", locationtext: "Алтанбулаг" },
  //     { locationvalue: "4140", locationtext: "Борнуур" },
  //     { locationvalue: "4143", locationtext: "Бүрэн" },
  //     { locationvalue: "4146", locationtext: "Дэлгэрхаан" },
  //     { locationvalue: "4149", locationtext: "Жаргалант" },
  //     { locationvalue: "4152", locationtext: "Заамар" },
  //     { locationvalue: "4155", locationtext: "Лүн" },
  //     { locationvalue: "4158", locationtext: "Мөнгөнморьт" },
  //     { locationvalue: "4161", locationtext: "Өндөрширээт" },
  //     { locationvalue: "4164", locationtext: "Сүмбэр" },
  //     { locationvalue: "4167", locationtext: "Сэргэлэн" },
  //     { locationvalue: "417", locationtext: "Аргалант" },
  //     { locationvalue: "4170", locationtext: "Угтаалцайдам" },
  //     { locationvalue: "4173", locationtext: "Цээл" },
  //     { locationvalue: "4176", locationtext: "Эрдэнэ" },
  //     { locationvalue: "4110", locationtext: "Архуст" },
  //   ],
  // },
  // {
  //   locationvalue: "85",
  //   locationtext: "Увс",
  //   data: [
  //     { locationvalue: "851", locationtext: "Улаангом" },
  //     { locationvalue: "857", locationtext: "Бөхмөрөн" },
  //     { locationvalue: "8513", locationtext: "Завхан" },
  //     { locationvalue: "8516", locationtext: "Зүүнговь" },
  //     { locationvalue: "8519", locationtext: "Зүүнхангай" },
  //     { locationvalue: "8522", locationtext: "Малчин" },
  //     { locationvalue: "8525", locationtext: "Наранбулаг" },
  //     { locationvalue: "8528", locationtext: "Өлгий" },
  //     { locationvalue: "8531", locationtext: "Өмнөговь" },
  //     { locationvalue: "8534", locationtext: "Өндөрхангай" },
  //     { locationvalue: "8537", locationtext: "Сагил" },
  //     { locationvalue: "854", locationtext: "Баруунтуруун" },
  //     { locationvalue: "8540", locationtext: "Тариалан" },
  //     { locationvalue: "8543", locationtext: "Түргэн" },
  //     { locationvalue: "8546", locationtext: "Тэс" },
  //     { locationvalue: "8549", locationtext: "Ховд" },
  //     { locationvalue: "8552", locationtext: "Хяргас" },
  //     { locationvalue: "8555", locationtext: "Цагаанхайрхан" },
  //     { locationvalue: "8510", locationtext: "Давст" },
  //   ],
  // },
  // {
  //   locationvalue: "84",
  //   locationtext: "Ховд",
  //   data: [
  //     { locationvalue: "841", locationtext: "Жаргалант" },
  //     { locationvalue: "847", locationtext: "Булган" },
  //     { locationvalue: "8413", locationtext: "Дарви" },
  //     { locationvalue: "8416", locationtext: "Дөргөн" },
  //     { locationvalue: "8419", locationtext: "Дуут" },
  //     { locationvalue: "8422", locationtext: "Зэрэг" },
  //     { locationvalue: "8425", locationtext: "Манхан" },
  //     { locationvalue: "8428", locationtext: "Мөнххайрхан" },
  //     { locationvalue: "8431", locationtext: "Мөст" },
  //     { locationvalue: "8434", locationtext: "Мянгад" },
  //     { locationvalue: "8437", locationtext: "Үенч" },
  //     { locationvalue: "844", locationtext: "Алтай" },
  //     { locationvalue: "8440", locationtext: "Ховд" },
  //     { locationvalue: "8443", locationtext: "Цэцэг" },
  //     { locationvalue: "8446", locationtext: "Чандмань" },
  //     { locationvalue: "8449", locationtext: "Эрдэнэбүрэн" },
  //     { locationvalue: "8410", locationtext: "Буянт" },
  //   ],
  // },
  // {
  //   locationvalue: "23",
  //   locationtext: "Хэнтий",
  //   data: [
  //     { locationvalue: "231", locationtext: "Хэрлэн" },
  //     { locationvalue: "237", locationtext: "Батширээт" },
  //     { locationvalue: "2313", locationtext: "Баянмөнх" },
  //     { locationvalue: "2316", locationtext: "Баян-Овоо" },
  //     { locationvalue: "2319", locationtext: "Баянхутаг" },
  //     { locationvalue: "2322", locationtext: "Биндэр" },
  //     { locationvalue: "2325", locationtext: "Галшар" },
  //     { locationvalue: "2328", locationtext: "Дадал" },
  //     { locationvalue: "2331", locationtext: "Дархан" },
  //     { locationvalue: "2334", locationtext: "Дэлгэрхаан" },
  //     { locationvalue: "2337", locationtext: "Жаргалтхаан" },
  //     { locationvalue: "234", locationtext: "Батноров" },
  //     { locationvalue: "2340", locationtext: "Мөрөн" },
  //     { locationvalue: "2343", locationtext: "Норовлин" },
  //     { locationvalue: "2346", locationtext: "Өмнөдэлгэр" },
  //     { locationvalue: "2349", locationtext: "Цэнхэрмандал" },
  //     { locationvalue: "2352", locationtext: "Бор-Өндөр" },
  //     { locationvalue: "2310", locationtext: "Баян-Адарга" },
  //   ],
  // },
  // {
  //   locationvalue: "67",
  //   locationtext: "Хөвсгөл",
  //   data: [
  //     { locationvalue: "671", locationtext: "Мөрөн" },
  //     { locationvalue: "677", locationtext: "Арбулаг" },
  //     { locationvalue: "6713", locationtext: "Бүрэнтогтох" },
  //     { locationvalue: "6716", locationtext: "Галт" },
  //     { locationvalue: "6719", locationtext: "Жаргалант" },
  //     { locationvalue: "6722", locationtext: "Их-Уул" },
  //     { locationvalue: "6725", locationtext: "Рашаант" },
  //     { locationvalue: "6728", locationtext: "Рэнчинлхүмбэ" },
  //     { locationvalue: "6731", locationtext: "Тариалан" },
  //     { locationvalue: "6734", locationtext: "Тосонцэнгэл" },
  //     { locationvalue: "6737", locationtext: "Төмөрбулаг" },
  //     { locationvalue: "674", locationtext: "Алаг-Эрдэнэ" },
  //     { locationvalue: "6740", locationtext: "Түнэл" },
  //     { locationvalue: "6743", locationtext: "Улаан-Уул" },
  //     { locationvalue: "6746", locationtext: "Ханх" },
  //     { locationvalue: "6749", locationtext: "Цагааннуур" },
  //     { locationvalue: "6752", locationtext: "Цагаан-Уул" },
  //     { locationvalue: "6755", locationtext: "Цагаан-Үүр" },
  //     { locationvalue: "6758", locationtext: "Цэцэрлэг" },
  //     { locationvalue: "6761", locationtext: "Чандмань-Өндөр" },
  //     { locationvalue: "6764", locationtext: "Шинэ-Идэр" },
  //     { locationvalue: "6767", locationtext: "Эрдэнэбулган" },
  //     { locationvalue: "6710", locationtext: "Баянзүрх" },
  //   ],
  // },
  // {
  //   locationvalue: "62",
  //   locationtext: "Өвөрхангай",
  //   data: [
  //     { locationvalue: "621", locationtext: "Арвайхээр" },
  //     { locationvalue: "627", locationtext: "Бат-Өлзий" },
  //     { locationvalue: "6213", locationtext: "Баян-Өндөр" },
  //     { locationvalue: "6216", locationtext: "Богд" },
  //     { locationvalue: "6219", locationtext: "Бүрд" },
  //     { locationvalue: "6222", locationtext: "Гучин-Ус" },
  //     { locationvalue: "6225", locationtext: "Есөн Зүйл" },
  //     { locationvalue: "6228", locationtext: "Зүүнбаян-Улаан" },
  //     { locationvalue: "6231", locationtext: "Нарийнтээл" },
  //     { locationvalue: "6234", locationtext: "Өлзийт" },
  //     { locationvalue: "6237", locationtext: "Сант" },
  //     { locationvalue: "624", locationtext: "Баруунбаян-Улаан" },
  //     { locationvalue: "6240", locationtext: "Тарагт" },
  //     { locationvalue: "6243", locationtext: "Төгрөг" },
  //     { locationvalue: "6246", locationtext: "Уянга" },
  //     { locationvalue: "6249", locationtext: "Хайрхандулаан" },
  //     { locationvalue: "6252", locationtext: "Хархорин" },
  //     { locationvalue: "6255", locationtext: "Хужирт" },
  //     { locationvalue: "6210", locationtext: "Баянгол" },
  //   ],
  // },
  // {
  //   locationvalue: "46",
  //   locationtext: "Өмнөговь",
  //   data: [
  //     { locationvalue: "461", locationtext: "Даланзадгад" },
  //     { locationvalue: "467", locationtext: "Баян-Овоо" },
  //     { locationvalue: "4613", locationtext: "Гурвантэс" },
  //     { locationvalue: "4616", locationtext: "Мандал-Овоо" },
  //     { locationvalue: "4619", locationtext: "Манлай" },
  //     { locationvalue: "4622", locationtext: "Ноён" },
  //     { locationvalue: "4625", locationtext: "Номгон" },
  //     { locationvalue: "4628", locationtext: "Сэврэй" },
  //     { locationvalue: "4631", locationtext: "Ханбогд" },
  //     { locationvalue: "4634", locationtext: "Ханхонгор" },
  //     { locationvalue: "4637", locationtext: "Хүрмэн" },
  //     { locationvalue: "464", locationtext: "Баяндалай" },
  //     { locationvalue: "4640", locationtext: "Цогт-Овоо" },
  //     { locationvalue: "4643", locationtext: "Цогтцэций" },
  //     { locationvalue: "4610", locationtext: "Булган" },
  //   ],
  // },
];

const arrowIcon = () => {
  return (
    <img
      src={dropdownIcon}
      alt="select"
      style={{ width: 14, height: 14, cursor: "pointer" }}
    />
  );
};
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: Math.max(0, parseInt(values.value)).toString().slice(0, 12),
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₮ "
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const LoanMainCard = () => {
  const [loading, setLoading] = useState(false);
  const [offerAmount, setOfferAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [offerError, setOfferError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);
  const [counter, setCounter] = useState(0);
  const [cities, setCities] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [tableState, setTableState] = useState([]);
  const [state, setState] = useState({
    loanAmount: "",
    loanType: "",
    yearlyIncome: "",
    otherLoans: "",
    otherLoansArray: tableState,
    loanPurpose: "",
    propertyPrice: "",
    circulationAmount: "",
    userType: "",
    lastName: "",
    firstName: "",
    registerNumber: "",
    phoneNumber: "",
    phoneUsage: "",
    corporateName: "",
    corporateRegister: "",
    corporateCity: "",
    corporateDistrict: "",
    corporateSubDistrict: "",
    corporateBuilding: "",
    corporateFloor: "",
    corporateType: "",
    isPartner: "",
    partnerCode: "",
    margin: "",
    debt: "",
  });

  function offerLogic() {
    setLoading(true);
    api.offerLogic(state, tableState).then((res) => {
      if (res.code[0] === "2") {
        setOfferAmount(res.data);
        setOpen(true);
        setLoading(false);
      } else if (res.code === "4038") {
        setOfferError(
          "Уучлаарай, та блоклогдсон байна. Та 00:00 цагаас хойш дахин оролдоно уу."
        );
        setErrorOpen(true);
        setLoading(false);
      } else if (res.code === "4111") {
        setOfferError("Байгууллагын мэдээлэл олдсонгүй.");
        setErrorOpen(true);
        setLoading(false);
      } else if (res.code === "4112") {
        setOfferError("Байгууллагын мэдээлэл таарсангүй.");
        setErrorOpen(true);
        setLoading(false);
      } else if (res.code === "4113") {
        setOfferError("Байгууллагын захиралын мэдээлэл таарсангүй.");
        setErrorOpen(true);
        setLoading(false);
      } else if (res.code === "4003") {
        setOfferError("Регистрийн дугаар бүртгэлтэй байна.");
        setErrorOpen(true);
        setLoading(false);
      } else if (res.code === "4002") {
        setOfferError("Уучлаарай, бүртгэл хийх боломжгүй байна.");
        setErrorOpen(true);
        setLoading(false);
      } else {
        setOfferError("Алдаа!");
        setErrorOpen(true);
        setLoading(false);
      }
    });
  }

  const [errorMessage, setErrorMessages] = React.useState({
    reg: "",
    fName: "",
    lName: "",
    phoneNu: "",
    cName: "",
  });

  const handleConfButton = () => {
    let newState = { ...errorMessage };
    if (state.registerNumber === "" || state.registerNumber.length !== 10) {
      newState = { ...newState, reg: "Регистрийн дугаараа оруулна уу" };
      setErrorMessages(newState);
      return;
    } else {
      newState = { ...newState, reg: "" };
    }

    if (state.phoneNumber === "" || state.phoneNumber.length !== 8) {
      newState = { ...newState, phoneNu: "Утасны дугаараа оруулна уу" };
      setErrorMessages(newState);
      return;
    } else {
      newState = { ...newState, phoneNu: "" };
    }

    setErrorMessages(newState);
    if (
      errorMessage.phoneNu === "" &&
      errorMessage.reg === "" &&
      state.registerNumber !== "" &&
      state.phoneNumber !== ""
    ) {
      setIsChecked(!isChecked);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "registerNumber") {
      let value = event.target.value.toUpperCase();
      let oldValue = value;
      value = value.replace(/[A-Za-z\s]/g, "");
      if (value === "" && oldValue !== "") {
        setErrorMessages({
          ...errorMessage,
          reg: "Кирилл үсгээр бичнэ үү",
        });
      } else {
        setState({
          ...state,
          [name]: value,
        });
        setErrorMessages({
          ...errorMessage,
          reg: "",
        });
      }
    } else if (name === "firstName") {
      let value = event.target.value.toUpperCase();
      let oldValue = value;
      value = value.replace(/[A-Za-z\s0-9]/g, "");
      if (value === "" && oldValue !== "") {
        setErrorMessages({
          ...errorMessage,
          fName: "Кирилл үсгээр бичнэ үү",
        });
      } else {
        setState({
          ...state,
          [name]: value,
        });
        setErrorMessages({
          ...errorMessage,
          fName: "",
        });
      }
    } else if (name === "lastName") {
      let value = event.target.value.toUpperCase();
      let oldValue = value;
      value = value.replace(/[A-Za-z\s0-9]/g, "");
      if (value === "" && oldValue !== "") {
        setErrorMessages({
          ...errorMessage,
          lName: "Кирилл үсгээр бичнэ үү",
        });
      } else {
        setState({
          ...state,
          [name]: value,
        });
        setErrorMessages({
          ...errorMessage,
          lName: "",
        });
      }
    } else if (name === "corporateName") {
      let value = event.target.value.toUpperCase();
      let oldValue = value;
      value = value.replace(/[A-Za-z]/g, "");
      if (value === "" && oldValue !== "") {
        setErrorMessages({
          ...errorMessage,
          cName: "Кирилл үсгээр бичнэ үү",
        });
      } else {
        setState({
          ...state,
          [name]: value,
        });
        setErrorMessages({
          ...errorMessage,
          cName: "",
        });
      }
    } else {
      setState({
        ...state,
        [name]: event.target.value,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
    window.location.reload();
  };


  return (
    <div className="loan-main-card">
      {pageCounter === 1 ? (
        <>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Танд хэдэн төгрөгийн хэрэгцээ байна вэ?
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.loanAmount}
              onChange={handleChange}
              inputProps={{
                name: "loanAmount",
              }}
            >
              <MenuItem value="₮ 5’000’000 – ₮ 10’000’000">
                ₮ 5’000’000 – ₮ 10’000’000
              </MenuItem>
              <MenuItem value="₮ 10’000’000 – ₮ 40’000’000">
                ₮ 10’000’000 – ₮ 40’000’000
              </MenuItem>
              <MenuItem value="₮ 40’000’000 – ₮ 100’000’000">
                ₮ 40’000’000 – ₮ 100’000’000
              </MenuItem>
              <MenuItem value="₮ 100’000’000 – ₮ 150’000’000">
                ₮ 100’000’000 – ₮ 150’000’000
              </MenuItem>
              <MenuItem value="₮ 150’000’000 – ₮ 200’000’000">
                ₮ 150’000’000 – ₮ 200’000’000
              </MenuItem>
              <MenuItem value="₮ 200’000’000 – ₮ 250’000’000">
                ₮ 200’000’000 – ₮ 250’000’000
              </MenuItem>
              <MenuItem value="₮ 250’000’000 – ₮ 300’000’000">
                ₮ 250’000’000 – ₮ 300’000’000
              </MenuItem>
              <MenuItem value="₮ 300’000’000 – ₮ 400’000’000">
                ₮ 300’000’000 – ₮ 400’000’000
              </MenuItem>
              <MenuItem value="₮ 400’000’000 – ₮ 500’000’000">
                ₮ 400’000’000 – ₮ 500’000’000
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Зээлийн төрлөө сонгоно уу?
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.loanType}
              onChange={handleChange}
              inputProps={{
                name: "loanType",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="0">Эргэлтийн хөрөнгө барьцаалсан зээл</MenuItem>
              <MenuItem value="1">Үл хөдлөх хөрөнгө барьцаалсан зээл</MenuItem>
            </Select>
          </FormControl>
          {state.loanType === "1" ? (
            <FormControl className="loan-form">
              <TextField
                required
                label="Үл хөдлөх хөрөнгийн үнийн дүн"
                autoComplete="off"
                onChange={handleChange}
                name="propertyPrice"
                value={state.propertyPrice}
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={editIcon}
                        alt="editIcon"
                        style={{ width: 14, height: 14 }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    color: "#000",
                  },
                }}
              />
            </FormControl>
          ) : state.loanType === "0" ? (
            <>
              <FormControl className="loan-form">
                <TextField
                  required
                  label="Эргэлтийн хөрөнгийн дүн"
                  autoComplete="off"
                  onChange={handleChange}
                  name="circulationAmount"
                  value={state.circulationAmount}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    endAdornment: (
                      <InputAdornment position="end">
                        <img
                          src={editIcon}
                          alt="editIcon"
                          style={{ width: 14, height: 14 }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "#000" },
                  }}
                />
              </FormControl>
              <FormControl className="loan-form">
                <TextField
                  required
                  label="Богино хугацаат өр төлбөр"
                  autoComplete="off"
                  onChange={handleChange}
                  name="debt"
                  value={state.debt}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    endAdornment: (
                      <InputAdornment position="end">
                        <img
                          src={editIcon}
                          alt="editIcon"
                          style={{ width: 14, height: 14 }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "#000" },
                  }}
                />
              </FormControl>
            </>
          ) : null}
          <FormControl className="loan-form">
            <TextField
              required
              label="Жилийн борлуулалтын орлого"
              autoComplete="off"
              onChange={handleChange}
              name="yearlyIncome"
              value={state.yearlyIncome}
              InputProps={{
                inputComponent: NumberFormatCustom,
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "#000" },
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Та бусад байгууллагад зээлтэй юу?
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.otherLoans}
              onChange={handleChange}
              inputProps={{
                name: "otherLoans",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="1">Тийм</MenuItem>
              <MenuItem value="0">Үгүй</MenuItem>
            </Select>
          </FormControl>
          {state.otherLoans === "1" ? (
            <div className="table-div">
              <div className="table-title-div">
                <p className="table-title table-title-1">№</p>
                <p
                  className="table-title table-title-2"
                  style={{ marginLeft: 140 }}
                >
                  Зээлийн төрөл
                </p>
                <p
                  className="table-title table-title-3"
                  style={{ marginLeft: 100 }}
                >
                  Сард төлдөг дүн
                </p>
              </div>
              <>
                {tableState.map((s, index) => {
                  return (
                    <div>
                      <div
                        className="table-row"
                        style={
                          index % 2 === 0 ? null : { backgroundColor: "white" }
                        }
                      >
                        <span className="table-row-title">
                          {"Зээл " + (index + 1)}
                        </span>
                        <Divider
                          className="table-row-divider"
                          orientation="vertical"
                        />
                        <FormControl className="table-row-form">
                          <Select
                            id="loan-type"
                            className="table-loan-type"
                            disableUnderline
                            style={{ marginLeft: 20, marginTop: "-3px" }}
                            IconComponent={arrowIcon}
                            value={s.loantype}
                            onChange={(e) => {
                              const type = e.target.value;
                              setTableState((currentState) =>
                                produce(currentState, (v) => {
                                  v[index].loantype = type;
                                })
                              );
                              setState({
                                ...state,
                                otherLoansArray: tableState,
                              });
                            }}
                            MenuProps={{
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                              },
                              getContentAnchorEl: null,
                            }}
                            inputProps={{
                              name: "loantype",
                            }}
                          >
                            <MenuItem value="0">Бизнесийн зээл</MenuItem>
                            <MenuItem value="1">Цалингийн зээл</MenuItem>
                            <MenuItem value="2">Тэтгэврийн зээл</MenuItem>
                            <MenuItem value="3">Картын зээл</MenuItem>
                            <MenuItem value="4">Автомашины зээл</MenuItem>
                            <MenuItem value="5">
                              Өрхийн хэрэглээнд зориулсан зээл
                            </MenuItem>
                            <MenuItem value="6">Орон сууцны зээл</MenuItem>
                            <MenuItem value="7">
                              Хадгаламж барьцаалсан зээл
                            </MenuItem>
                            <MenuItem value="8">Бусад</MenuItem>
                          </Select>
                        </FormControl>
                        <Divider
                          className="table-row-divider-2"
                          orientation="vertical"
                        />
                        <FormControl className="table-row-textfield">
                          <TextField
                            style={{ marginTop: "-3.5px" }}
                            autoComplete="off"
                            onChange={(e) => {
                              const amount = e.target.value;
                              setTableState((currentState) =>
                                produce(currentState, (v) => {
                                  v[index].mthlypmt = amount;
                                })
                              );
                              setState({
                                ...state,
                                otherLoansArray: tableState,
                              });
                            }}
                            name="mthlypmt"
                            value={s.mthlypmt}
                            InputProps={{
                              inputComponent: NumberFormatCustom,
                              disableUnderline: true,
                            }}
                            InputLabelProps={{
                              style: { color: "#000" },
                            }}
                          />
                        </FormControl>
                        <img
                          src={editIcon}
                          alt="logo"
                          style={{
                            width: 14,
                            height: 14,
                            marginTop: "3.5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <img
                        onClick={() => {
                          setTableState(
                            tableState.filter((item, i) => i !== index)
                          );
                        }}
                        src={deleteIcon}
                        alt="logo"
                        style={{
                          marginLeft: 20,
                          width: 15,
                          height: 18,
                          marginTop: "3.5px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  );
                })}
                <div
                  onClick={() => {
                    setTableState((currentState) => [
                      ...currentState,
                      {
                        mthlypmt: "",
                        loantype: "0",
                      },
                    ]);
                    setCounter(counter + 1);
                  }}
                  className="add-button-div"
                >
                  <img src={openIcon} className="add-button-icon-icon" alt="" />
                  <span className="add-text">Зээл нэмэх</span>
                </div>
              </>
            </div>
          ) : null}
          <FormControl required className="loan-form">
            <InputLabel className="loan-form-title">
              Зээлийн зарцуулалтаа сонгоно уу?
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.loanPurpose}
              onChange={handleChange}
              inputProps={{
                name: "loanPurpose",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="0">
                Эргэлтийн хөрөнгө санхүүжилт
              </MenuItem>
              <MenuItem value="1">
                Үндсэн хөрөнгийн санхүүжилт
              </MenuItem>
              <MenuItem value="2">
                Үл хөдлөх хөрөнгө худалдан авах
              </MenuItem>
              <MenuItem value="3">
                Автомашин худалдан авах
              </MenuItem>
              <MenuItem value="4">
                Бусад хувийн хэрэгцээ
              </MenuItem>
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Үйл ажиллагаа эрхлэгчийн төрөл
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.userType}
              onChange={handleChange}
              inputProps={{
                name: "userType",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="0">Хувь хүн</MenuItem>
              <MenuItem value="1">Аж ахуй нэгж</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label={state.userType === "1" ? "Захирлын овог" : "Овог"}
              autoComplete="off"
              onChange={handleChange}
              name="lastName"
              error={errorMessage.lName !== ""}
              helperText={errorMessage.lName}
              value={state.lastName}
              InputLabelProps={{
                style: {
                  color: errorMessage.lName !== "" ? "#e8553e" : "#000",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label={state.userType === "1" ? "Захирлын нэр" : "Нэр"}
              autoComplete="off"
              onChange={handleChange}
              name="firstName"
              error={errorMessage.fName !== ""}
              helperText={errorMessage.fName}
              value={state.firstName}
              InputLabelProps={{
                style: {
                  color: errorMessage.fName !== "" ? "#e8553e" : "#000",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label="Регистрийн дугаар"
              autoComplete="off"
              onChange={handleChange}
              name="registerNumber"
              error={errorMessage.reg !== ""}
              helperText={errorMessage.reg}
              value={state.registerNumber}
              InputLabelProps={{
                style: { color: errorMessage.reg !== "" ? "#e8553e" : "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label="Утасны дугаар"
              autoComplete="off"
              type="number"
              onChange={handleChange}
              error={errorMessage.phoneNu !== ""}
              helperText={errorMessage.phoneNu}
              name="phoneNumber"
              value={state.phoneNumber}
              InputLabelProps={{
                style: {
                  color: errorMessage.phoneNu !== "" ? "#e8553e" : "#000",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Утасны дугаар ашигласан хугацаа сонгох
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.phoneUsage}
              onChange={handleChange}
              inputProps={{
                name: "phoneUsage",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="0">1 жил хүртэл</MenuItem>
              <MenuItem value="1">1-2 жил</MenuItem>
              <MenuItem value="2">2-3 жил</MenuItem>
              <MenuItem value="3">3-с дээш</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required={state.userType === "1" ? true : false}
              label="Хуулийн этгээдийн нэр"
              autoComplete="off"
              onChange={handleChange}
              name="corporateName"
              error={errorMessage.cName !== ""}
              helperText={errorMessage.cName}
              value={state.corporateName}
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              label="Хуулийн этгээдийн регистрийн дугаар"
              required={state.userType === "1" ? true : false}
              autoComplete="off"
              onChange={handleChange}
              name="corporateRegister"
              type="number"
              value={state.corporateRegister}
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Үйл ажиллагаа явуулж буй газрын хаяг
            </InputLabel>
            <Select
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
              IconComponent={arrowIcon}
              value={state.type1}
              onChange={(event) => {
                setState({
                  ...state,
                  corporateCity: event.target.value.locationvalue,
                  type1: event.target.value,
                });
                setCities(event.target.value.data);
              }}
              inputProps={{
                name: "corporateCity",
              }}
            >
              {states.map((item) => {
                return <MenuItem value={item}>{item.locationtext}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Дүүрэг, сум
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.corporateDistrict}
              onChange={handleChange}
              inputProps={{
                name: "corporateDistrict",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              {cities.map((item) => {
                return (
                  <MenuItem value={item.locationvalue}>
                    {item.locationtext}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label="Хороо, баг"
              autoComplete="off"
              onChange={handleChange}
              name="corporateSubDistrict"
              value={state.corporateSubDistrict}
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              required
              label="Барилга"
              autoComplete="off"
              onChange={handleChange}
              name="corporateBuilding"
              value={state.corporateBuilding}
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <TextField
              label="Давхар"
              required
              autoComplete="off"
              onChange={handleChange}
              name="corporateFloor"
              value={state.corporateFloor}
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Үйл ажиллагааны салбар
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              onChange={(event) => {
                setOccupations(event.target.value.data);
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              {occupationData.map((item) => {
                return <MenuItem value={item}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Үйл ажиллагааны чиглэл
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.type}
              onChange={(event) => {
                setState({
                  ...state,
                  margin: event.target.value.margin,
                  corporateType: event.target.value.name,
                  type: event.target.value,
                });
              }}
              inputProps={{
                name: "corporateType",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              {occupations.map((item) => {
                return <MenuItem value={item}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl className="loan-form">
            <InputLabel required className="loan-form-title">
              Та Анунгоо ХХК, М-Си-Эс Кока-Кола компанийн бүтээгдэхүүн
              борлуулдаг эсэх?
            </InputLabel>
            <Select
              IconComponent={arrowIcon}
              value={state.isPartner}
              onChange={handleChange}
              inputProps={{
                name: "isPartner",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="1">Тийм</MenuItem>
              <MenuItem value="0">Үгүй</MenuItem>
            </Select>
          </FormControl>
          {state.isPartner === "1" ? (
            <FormControl className="loan-form">
              <InputLabel className="loan-form-title">
                Харилцагчийн дугаар:
              </InputLabel>
              <Input
                autoComplete="off"
                onChange={handleChange}
                name="partnerCode"
                value={state.partnerCode}
                InputLabelProps={{
                  style: { color: "#000" },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      style={{ width: 14, height: 14 }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          ) : null}
          <div onClick={handleConfButton} className="checkbox-div">
            <div
              style={
                isChecked === false
                  ? { backgroundColor: "#e4e8eb" }
                  : { backgroundColor: "#1dbfc4" }
              }
              className="checkbox-little"
            />
            <span className="checkbox-text">
              Би зээлийн мэдээллийн санд лавлагаа авахыг зөвшөөрч байна.
            </span>
          </div>
          <Button
            onClick={() => {
              offerLogic();
            }}
            className={
              state.userType === "1"
                ? state.userType !== "" &&
                  state.lastName !== "" &&
                  state.firstName !== "" &&
                  state.registerNumber !== "" &&
                  state.phoneNumber !== "" &&
                  state.phoneUsage !== "" &&
                  state.corporateName !== "" &&
                  state.corporateRegister !== "" &&
                  state.corporateCity !== "" &&
                  state.corporateDistrict !== "" &&
                  state.corporateSubDistrict !== "" &&
                  state.corporateBuilding !== "" &&
                  state.corporateFloor !== "" &&
                  state.corporateType !== "" &&
                  state.isPartner !== "" &&
                  isChecked
                  ? "loan-to-userinfo-button"
                  : "loan-not-valid-button"
                : state.userType !== "" &&
                  state.lastName !== "" &&
                  state.firstName !== "" &&
                  state.registerNumber !== "" &&
                  state.phoneNumber !== "" &&
                  state.phoneUsage !== "" &&
                  state.corporateCity !== "" &&
                  state.corporateDistrict !== "" &&
                  state.corporateSubDistrict !== "" &&
                  state.corporateBuilding !== "" &&
                  state.corporateFloor !== "" &&
                  state.corporateType !== "" &&
                  state.isPartner !== "" &&
                  isChecked 
                ? "loan-to-userinfo-button"
                : "loan-not-valid-button"
            }
            disabled={
              state.userType === "1"
                ? state.userType !== "" &&
                  state.lastName !== "" &&
                  state.firstName !== "" &&
                  state.registerNumber !== "" &&
                  state.phoneNumber !== "" &&
                  state.phoneUsage !== "" &&
                  state.corporateName !== "" &&
                  state.corporateRegister !== "" &&
                  state.corporateCity !== "" &&
                  state.corporateDistrict !== "" &&
                  state.corporateSubDistrict !== "" &&
                  state.corporateBuilding !== "" &&
                  state.corporateFloor !== "" &&
                  state.corporateType !== "" &&
                  state.isPartner !== "" &&
                  isChecked 
                  ? false
                  : true
                : state.userType !== "" &&
                  state.lastName !== "" &&
                  state.firstName !== "" &&
                  state.registerNumber !== "" &&
                  state.phoneNumber !== "" &&
                  state.phoneUsage !== "" &&
                  state.corporateCity !== "" &&
                  state.corporateDistrict !== "" &&
                  state.corporateSubDistrict !== "" &&
                  state.corporateBuilding !== "" &&
                  state.corporateFloor !== "" &&
                  state.corporateType !== "" &&
                  state.isPartner !== "" &&
                  isChecked 
                ? false
                : true
            }
          >
            {state.userType === "1" ? (
              state.lastName !== "" &&
              state.firstName !== "" &&
              state.registerNumber !== "" &&
              state.phoneNumber !== "" &&
              state.phoneUsage !== "" &&
              state.corporateName !== "" &&
              state.corporateRegister !== "" &&
              state.corporateCity !== "" &&
              state.corporateDistrict !== "" &&
              state.corporateSubDistrict !== "" &&
              state.corporateBuilding !== "" &&
              state.corporateFloor !== "" &&
              state.corporateType !== "" &&
              state.isPartner !== "" &&
              isChecked  ? (
                <span className="next-button-text">
                  {loading ? "Та түр хүлээнэ үү ..." : "Үргэлжлүүлэх"}
                </span>
              ) : (
                <img
                  src={rightArrow}
                  alt="next"
                  style={{ width: 18, height: 13 }}
                />
              )
            ) : state.lastName !== "" &&
              state.firstName !== "" &&
              state.registerNumber !== "" &&
              state.phoneNumber !== "" &&
              state.phoneUsage !== "" &&
              state.corporateCity !== "" &&
              state.corporateDistrict !== "" &&
              state.corporateSubDistrict !== "" &&
              state.corporateBuilding !== "" &&
              state.corporateFloor !== "" &&
              state.corporateType !== "" &&
              state.isPartner !== "" &&
              isChecked  ? (
              <span className="next-button-text">
                {loading ? "Та түр хүлээнэ үү ..." : "Үргэлжлүүлэх"}
              </span>
            ) : (
              <img
                src={rightArrow}
                alt="next"
                style={{ width: 18, height: 13 }}
              />
            )}
          </Button>

          <OfferModal
            open={open}
            amount={offerAmount}
            handleClose={handleClose}
          />
          <ErrorModal
            errorOpen={errorOpen}
            text={offerError}
            handleErrorClose={handleErrorClose}
          />
        </>
      )}
      {pageCounter === 1 ? (
        <Button
          onClick={() => setPageCounter(2)}
          className={
            state.loanType === "1"
              ? state.loanAmount !== "" &&
                state.loanType !== "" &&
                state.yearlyIncome !== "" &&
                state.otherLoans !== "" &&
                state.loanPurpose !== "" &&
                state.propertyPrice !== ""
                ? "loan-to-userinfo-button"
                : "loan-not-valid-button"
              : state.loanAmount !== "" &&
                state.loanType !== "" &&
                state.yearlyIncome !== "" &&
                state.otherLoans !== "" &&
                state.loanPurpose !== "" &&
                state.circulationAmount !== "" &&
                state.debt !== ""
              ? "loan-to-userinfo-button"
              : "loan-not-valid-button"
          }
          disabled={
            state.loanType === "1"
              ? state.loanAmount !== "" &&
                state.loanType !== "" &&
                state.yearlyIncome !== "" &&
                state.otherLoans !== "" &&
                state.loanPurpose !== "" &&
                state.propertyPrice !== ""
                ? false
                : true
              : state.loanAmount !== "" &&
                state.loanType !== "" &&
                state.yearlyIncome !== "" &&
                state.otherLoans !== "" &&
                state.loanPurpose !== "" &&
                state.circulationAmount !== "" &&
                state.debt !== ""
              ? false
              : true
          }
        >
          {state.loanType === "1" ? (
            state.loanAmount !== "" &&
            state.loanType !== "" &&
            state.yearlyIncome !== "" &&
            state.otherLoans !== "" &&
            state.loanPurpose !== "" &&
            state.propertyPrice !== "" ? (
              <img
                src={rightArrowWhite}
                alt="next"
                style={{ width: 18, height: 13 }}
              />
            ) : (
              <img
                src={rightArrow}
                alt="next"
                style={{ width: 18, height: 13 }}
              />
            )
          ) : state.loanAmount !== "" &&
            state.loanType !== "" &&
            state.yearlyIncome !== "" &&
            state.otherLoans !== "" &&
            state.loanPurpose !== "" &&
            state.circulationAmount !== "" &&
            state.debt !== "" ? (
            <img
              src={rightArrowWhite}
              alt="next"
              style={{ width: 18, height: 13 }}
            />
          ) : (
            <img
              src={rightArrow}
              alt="next"
              style={{ width: 18, height: 13 }}
            />
          )}
        </Button>
      ) : null}
    </div>
  );
};
