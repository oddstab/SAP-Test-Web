import { NextPage } from "next";
import React from "react";
import { Layout } from "@/components/";
import QuestionCard from "@/components/QuestionCard";
import { Card, Container } from "@material-ui/core";

const json = [
  {
    id: 1,
    ans: "D",
    qst: "物料管理(Material Management)在SAP系統中跟下列模組何者有關",
    a: "銷售模組(SD)",
    b: "生產規劃模組(PP)",
    c: "會計模組(FI)",
    d: "以上皆是。",
  },
  {
    id: 2,
    ans: "B",
    qst: "在組織層次中工廠(Plant)不可能代表以下何者",
    a: "製造工廠(manufacturing facility)",
    b: "儲存地點(Storage Location)",
    c: "物流中心(Distrubution Center)",
    d: "倉庫(Warehouse)。",
  },
  {
    id: 3,
    ans: "D",
    qst: "物料移轉(Goods Transfer)分為以下何種型態",
    a: "庫存移轉(Stock Transfer)",
    b: "移轉過帳(Transfer Posting)",
    c: "以上皆非",
    d: "以上皆是。",
  },
  {
    id: 4,
    ans: "C",
    qst: "託售(Consignment)的意涵為以下何者",
    a: "產品位於託售商處且擁有產品所有權",
    b: "產品位於上游供應商，但託售商擁有產品所有權",
    c: "產品位於託售商處，但不具有產品所有權",
    d: "產品位於上游供應商且不具有產品所有權。",
  },
  {
    id: 5,
    ans: "C",
    qst: "對供應商進行具有法律效益的採購文件為何者",
    a: "銷售單(Sales Order)",
    b: "請購單(Purchase Requirement)",
    c: "採購單(Purchase Order)",
    d: "生產工單(Production Order)。",
  },
  {
    id: 6,
    ans: "B",
    qst:
      "當物料不足必須向供應商進行採購時，需要將計劃工單(Planned Order)轉成何種文件",
    a: "採購單(Purchase Order)",
    b: "請購單(Purchase Requirement)",
    c: "銷售單(Sales Order)",
    d: "報價單(Quotation)。",
  },
  {
    id: 7,
    ans: "D",
    qst: "下列何者為發送採購單文件的型式",
    a: "影印(Printer)",
    b: "網路傳輸(EDI、E-mail)",
    c: "傳真(Fax)",
    d: "以上皆可。",
  },
  {
    id: 8,
    ans: "C",
    qst: "下列何者為會計的過渡帳",
    a: "應收帳款",
    b: "應付帳款",
    c: "GR/IR",
    d: "以上皆可。",
  },
  {
    id: 9,
    ans: "B",
    qst: "下列何者為組織層次中最小的獨立會計單位",
    a: "用戶端(Client)",
    b: "公司代碼(Company Code)",
    c: "工廠(Plant)",
    d: "儲存地點(Storage Location)。",
  },
  {
    id: 10,
    ans: "D",
    qst: "當完成發票驗證後，會產生下列何者文件",
    a: "發票文件(Invoice document)",
    b: "會計文件(Accounting document)",
    c: "以上皆非",
    d: "以上皆是。",
  },
  {
    id: 11,
    ans: "C",
    qst: "供應商將物料送達後，到會計部門付款前的動作為下列何者",
    a: "盤點(Physical Inventory)",
    b: "入庫",
    c: "發票驗證(Invoice Verification)",
    d: "出貨(Goods Issue)。",
  },
  {
    id: 12,
    ans: "D",
    qst: "採購資訊紀錄(Purchasing Info Record)中有以下何者資料",
    a: "定價條件(Conditions)",
    b: "最近一期的採購單(Last purchase order)",
    c: "以上皆非",
    d: "以上皆是。",
  },
  {
    id: 13,
    ans: "D",
    qst: "在採購單、請購單中項目種類(Item Category)可為以下何者",
    a: "委外加工(Subcontracting)",
    b: "託售(Consignment)",
    c: "庫存移轉單(Stock transport orders)",
    d: "以上皆是。",
  },
  {
    id: 14,
    ans: "A",
    qst: "何種文件是遞交給採購部門，其中包括多少數量和何時需要的資訊",
    a: "請購單(Purchase Requirement)",
    b: "採購單(Purchase Order)",
    c: "銷售單(Sales Order)",
    d: "詢價單(Request for Quotation)。",
  },
  {
    id: 15,
    ans: "D",
    qst:
      "系統中異動類型(Movement Types)為採購單收貨至倉庫(Goods recepit into warehouse/stores)的代碼為何者",
    a: "522",
    b: "311",
    c: "122",
    d: "101。",
  },
  {
    id: 16,
    ans: "B",
    qst: "下列何者非收貨(Goods Receipt)的存貨型態(Stock type)",
    a: "不受限的型態(Unrestricted-use stock)",
    b: "預留的存貨型態(Reservation)",
    c: "需品質檢驗的型態(Stock in quality inspection)",
    d: "凍結庫存型態(Blocked stock)。",
  },
  {
    id: 17,
    ans: "D",
    qst: "系統中進行發票驗證(Invoice Verification)時會導入下列何者資訊",
    a: "物料文件(Material document)",
    b: "發票(Invoice)",
    c: "採購單(Purchase Order)",
    d: "以上皆是。",
  },
  {
    id: 18,
    ans: "D",
    qst: "採購組織可屬於哪個組織層次",
    a: "同一個公司下，一個採購組織對應一個工廠",
    b: "同一個公司下，一個採購組織對應多個工廠",
    c: "在同一個集團下，一個採購組織對應多個公司",
    d: "以上皆可。",
  },
  {
    id: 19,
    ans: "D",
    qst: "定價條件(Conditions)用於下列何者資料檔中",
    a: "概要協定(Outline Agreement)",
    b: "採購單(Purchase Order)",
    c: "採購資訊紀錄(Info Record)",
    d: "以上皆是。",
  },
  {
    id: 20,
    ans: "A",
    qst: "下列何者為Block stock的意義",
    a: "已入庫、會計科目已有改變",
    b: "已入庫、但會計課目未改變",
    c: "先有條件收下，未入庫，但會計科目已改變",
    d: "先有條件收下，未入庫，會計科目未改變。",
  },
  {
    id: 21,
    ans: "A",
    qst:
      "以採購單為基礎的發票驗證(Purchase-order-based Invoice Verification)，系統代表的意義為何",
    a: "物料多次送達，但只有一次發票驗證",
    b: "物料分幾次送達，就有幾次發票驗證",
    c: "物料一次送達，但有多次發票驗證",
    d: "以上皆可。",
  },
  {
    id: 22,
    ans: "D",
    qst: "消耗性物料(Consumable material)有以下何者特性",
    a: "物料或服務直接對應FI模組中的會計科目",
    b: "不一定要有物料主檔紀錄(material master record)",
    c: "若有物料主檔紀錄，此次交易價格不會更新於物料主檔紀錄",
    d: "以上皆是。",
  },
  {
    id: 23,
    ans: "D",
    qst: "物料異動(Goods Movement)可為以下何種型態",
    a: "收貨(Goods Receipt)",
    b: "發貨(Goods Issue)",
    c: "物料移轉(Goods Transfer)",
    d: "以上皆可。",
  },
  {
    id: 24,
    ans: "C",
    qst: "庫存一覽表(Stock Overview)的T-code",
    a: "MD04",
    b: "MM03",
    c: "MMBE",
    d: "XK03。",
  },
  {
    id: 25,
    ans: "A",
    qst: "在供應商主檔資料中不包含以下何者",
    a: "工廠資料(Plant data)",
    b: "一般資料(General data)",
    c: "公司代碼資料(Company code data)",
    d: "採購組織資料(Purchasing organization data)。",
  },
  {
    id: 26,
    ans: "B",
    qst: "當採購物料進行收貨後，下列何者未發生",
    a: "物料文件(Material document)的產生",
    b: "銷售文件(Sales document)的產生",
    c: "會計文件(Accounting document)的產生",
    d: "發票文件的(Invoice document)產生。",
  },
  {
    id: 27,
    ans: "D",
    qst: "下列何者為GR Block stock的意義",
    a: "已入庫、會計科目已有改變",
    b: "已入庫、但會計課目未改變",
    c: "先有條件收下，未入庫，但會計科目已改變",
    d: "先有條件收下，未入庫，會計科目未改變。",
  },
  {
    id: 28,
    ans: "B",
    qst:
      "在消耗性物料主檔紀錄中，非評價物料之物料型態(Non-value material;UNBW)意義為以下何者",
    a: "數量和價格都沒有更新",
    b: "數量更新但價格沒更新",
    c: "價格更新但數量沒更新",
    d: "數量價格都有更新。",
  },
  {
    id: 29,
    ans: "D",
    qst: "移轉過帳(Transfer Posting)所代表的意義為下列何者",
    a: "物料的資訊、內容改變(Material Information and Property Transfer)",
    b: "物料的使用屬性改變(Material Stock Type Transfer)",
    c: "以上皆非",
    d: "以上皆是。",
  },
  {
    id: 30,
    ans: "D",
    qst: "以下何者為請購單(Purchasing Requirement)的需求來源",
    a: "PP模組的MRP",
    b: "SD模組的銷售單",
    c: "內部人員",
    d: "以上皆是。",
  },
  {
    id: 31,
    ans: "A",
    qst:
      "在消耗性物料主檔紀錄中，非庫存物料之物料型態(Non-stock material;NLAG)意義為以下何者",
    a: "數量和價格都沒有更新",
    b: "數量更新但價格沒更新",
    c: "價格更新但數量沒更新",
    d: "數量價格都有更新。",
  },
  {
    id: 32,
    ans: "B",
    qst:
      "以收貨為基礎的發票驗證(Goods-receipt-based Invoice Verification)，系統代表的意義為何",
    a: "物料多次送達，但只有一次發票驗證",
    b: "物料分幾次送達，就有幾次發票驗證",
    c: "物料一次送達，但有多次發票驗證",
    d: "以上皆可。",
  },
  {
    id: 33,
    ans: "D",
    qst: "庫存移轉(Stock Transfer)為下列何種狀態",
    a: "物料由工廠轉移到另一工廠",
    b: "物料由同工廠的儲存地點轉移到另一儲存地點",
    c: "物料由工廠的儲存地點轉移到另一工廠的儲存地點",
    d: "以上皆可。",
  },
  {
    id: 34,
    ans: "D",
    qst: "在運籌模組中主檔資料(master data)為何者",
    a: "物料主檔資料",
    b: "供應商主檔資料",
    c: "顧客主檔資料",
    d: "以上皆是。",
  },
  {
    id: 35,
    ans: "B",
    qst: "在採購流程中何者為MM模組所負責的最後部分",
    a: "付款(Payment Processing)",
    b: "發票驗證(Invoice verification)",
    c: "收貨(Goods Receipt)",
    d: "以上皆非。",
  },
  {
    id: 36,
    ans: "D",
    qst: "差異清單裡，您可以執行底下功能？",
    a: "輸入、改變、顯示計算（Enter, change, display count）",
    b: "將差異進行過帳（Post difference）",
    c: "顯示或改變文件（Display or change document）",
    d: "以上皆是。",
  },
  {
    id: 37,
    ans: "C",
    qst: "下列何者為後勤執行的兩種基本型式？",
    a: "收貨",
    b: "發貨",
    c: "以上皆是",
    d: "以上皆非。",
  },
];

/**
 * 打亂陣列
 */
const breakArray = (arr: any[]) => {
  let newArr = [...arr];
  newArr.sort(() => 0.5 - Math.random());

  return newArr;
};

const Index: NextPage = () => {
  return (
    <Layout>
      <Card>1234</Card>
    </Layout>
  );
};

export default Index;
