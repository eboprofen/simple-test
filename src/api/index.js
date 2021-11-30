export const getLocations = async () => {
  const response = await fetch("https://cms.simple.mn/locations", 
  {
    method: "GET",
    mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
  });
  return response.json();
};

export const getNews = async () => {
  const response = await fetch("https://cms.simple.mn/contents", 
  {
    method: "GET",
    mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
  });
  return response.json();
};

export const getContent = async (id) => {
  const response = await fetch("https://cms.simple.mn/contents/"+id, 
  {
    method: "GET",
    mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
  });
  return response.json();
}

export const offerLogic = async (data, data2) => {
  const response = await fetch(
    "https://api.simple.mn:9095/merchant-main-loanoffer",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        amount: data.loanAmount,
        apartment: data.corporateBuilding,
        assetvaluation: data.propertyPrice,
        bureauid: data.partnerCode,
        bureauseq: data.isPartner,
        businessoperation: data.corporateType,
        city: data.corporateDistrict,
        corpname: data.corporateName,
        corpregnum: data.corporateRegister,
        doornumber: data.corporateFloor,
        firstname: data.firstName,
        isloan: data.otherLoans,
        lastname: data.lastName,
        loanList: {
          data: data2,
        },
        loantype: data.loanType,
        phoneduration: data.phoneUsage,
        phonenumber: data.phoneNumber,
        purpose: data.loanPurpose,
        regnum: data.registerNumber,
        sales: data.yearlyIncome,
        section: data.corporateSubDistrict,
        state: data.corporateCity,
        type: data.userType,
        floatingassetvaluation: data.circulationAmount,
        margin: data.margin,
        shorttermdebt: data.debt,
      }),
    }
  );
  return response.json();
};
