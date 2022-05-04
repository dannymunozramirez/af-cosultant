import React, { useState } from "react";
export const contentList = [
  {a:<>Texto</>},{b:<>Texto</>}
]
export const useContentText = () => {
  const [content, setcontent] = useState({
    ABOUT_ONE_EN: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    ABOUT_ONE_FR: (
      <>
        Le logiciel AF-Consultants - Services Tax ne peut garantir cela. Dans
        l'éventualité d'un avis de cotisation différent ou d'un nouvel avis au
        cours de la année, vous devez nous contacter pour en déterminer la
        cause. Parfois un un simple coup de téléphone au ministère règle la
        situation. Sinon un un avis d'opposition doit être déposé pour régler le
        différend dans le les délais prescrits
      </>
    ),
    ABOUT_TWO_EN: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    ABOUT_TWO_FR: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    CONTACT_ONE_EN: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    CONTACT_ONE_FR: (
      <>
        Le logiciel AF-Consultants - Services Tax ne peut garantir cela. Dans
        l'éventualité d'un avis de cotisation différent ou d'un nouvel avis au
        cours de la année, vous devez nous contacter pour en déterminer la
        cause. Parfois un un simple coup de téléphone au ministère règle la
        situation. Sinon un un avis d'opposition doit être déposé pour régler le
        différend dans le les délais prescrits
      </>
    ),
    CONTACT_TWO_EN: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    CONTACT_TWO_FR: (
      <>
        Whether you are an employee or a self-employed and you need an
        accountant to take the worry out , your are in the right place.
        AF-Consultants offers a wide range of services: Taxation for individuals
        and corporations, Accounting and fiscal planning, Financial statements
        and forecasts, Computerized bookkeeping and Payroll Systems, Services
        for startups and Incorporations. AF-Consultants also offers services
        such as: GST-QST statements, payroll remittances and employer
        contributions, budgets, drafting of contracts, internal and external
        control systems.
      </>
    ),
    SERVICE_ONE_EN: (
      <>
        Tax software cannot guarantee this. In the event of a different or a new
        notice of assessment during the year, you must contact us to determine
        the cause. Sometimes a simple phone call to the ministry fixes the
        situation. Otherwise a notice of objection must be filed to settle the
        dispute within the prescribed time limits.
      </>
    ),
    SERVICE_ONE_FR: (
      <>
        Le logiciel d'impôt ne peut pas le garantir. En cas d'un différent ou
        d'un nouvel avis de cotisation en cours d'année, vous devez nous
        contacter pour déterminer la cause. Parfois un simple coup de fil au
        ministère corrige la situation. Sinon, un avis d'opposition doit être
        déposé de régler le différend dans les délais prescrits.
      </>
    ),
    SERVICE_TWO_EN: (
      <>
        "Entrust it to our experts! When filing your returns, there is always a
        second check to ensure the reliability of your reports. In addition,
        AF-Consultants policy is to guarantee that your notices of contributions
        will be identical to your declarations."
      </>
    ),
    SERVICE_TWO_FR: (
      <>
        "Confiez-le à nos experts ! Lors du dépôt de vos déclarations, il y a
        toujours une deuxième vérification pour s'assurer de la fiabilité de vos
        déclarations. De plus, la politique d'AF-Consultants est de garantir que
        vos avis de cotisations seront identiques à vos déclarations."
      </>
    ),
    SERVICE_THREE_EN: (
      <>
        Accounting is the main tool for sound business management It is
        mandatory for all commercial activity according to the tax laws in force
        in the country. Accounting is based on bookkeeping and supporting
        documents. All transactions must be recorded.
      </>
    ),
    SERVICE_THREE_FR: (
      <>
        La comptabilité est le principal outil d'une saine gestion d'entreprise
        Il est obligatoire pour toute activité commerciale selon les lois
        fiscales en vigueur dans le pays. La comptabilité est basée sur la
        comptabilité et les pièces justificatives. Toutes les transactions
        doivent être enregistrées.
      </>
    ),
  });
  return content;
};
