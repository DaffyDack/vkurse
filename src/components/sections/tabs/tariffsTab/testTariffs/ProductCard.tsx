import { useState, useEffect } from "preact/hooks";
import "./style.scss";

export default function ProductCard({}) {
  const [tariffList, setTariffList] = useState([]);
  const [tariffInfo, setTariffInfo] = useState([]);
  const [loader, setLoader] = useState(false);

  const [storage, setStorage] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [mount, setMount] = useState("12 месяцев");
  const [save, setSave] = useState("");

  useEffect(() => {
    const rememberMe = localStorage.getItem("tariff");
    setStorage(rememberMe);
    fetch(import.meta.env.PUBLIC_API_URL + "v1/tariff-name/"+storage, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTariffList(json.data.tariff_option);
        setTariffInfo(json.data.tariff_info);
        setPrice(json.data.price);
        setId(json.data.tariff_id);
      })
      .catch((error) => {
        console.log("что то пошло не так");
      });
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, [storage]);

  function handleChange(e) {
    setMount(e.target.value);
  }
  function saveMouth() {
    setSave(mount);
  }
  function returnMonth() {
    setMount(save);
  }
  const pay = () => {
    window.location.href = `https://lk.vkurse.ru/settings/paytariffs?tariff=${storage}`;
  };

  return (
    <>
      <div
        class="wrapper_loader"
        style={`display: ${loader ? "block" : "none"}`}
      >
        <div class="loader">
          <svg
            class="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="path"
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      </div>
      <div class="wrapper_form">
        <div class="left_form">
          <div>
            <div class="title_decoration">{storage}</div>
            <div>Конфигурация лицензии</div>
            <ul>
              {tariffList.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <div class="base_fun">Базовый функционал</div>
            <div>{tariffInfo}</div>
          </div>
        </div>
        <div class="right_form">
          <div class="title_decoration img">
            Оформление <br /> заявки
          </div>

          <div class="module">
            <div class="parametr_subscription">параметры подписки</div>
            <button
              type="button"
              class="module_button inline-block "
              data-te-toggle="modal"
              data-te-target="#exampleModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={saveMouth}
            >
              <div class="title">Период подписки</div>
              <div>{mount}</div>
            </button>

            <div class="form_pay">
              <div class="title">Способ оплаты</div>
              <div class="form_radio_pay">
                <input
                  id="bank"
                  type="radio"
                  name="radio1"
                  value="1 месяц"
                  defaultChecked
                ></input>
                <label class="card" for="bank">
                  <div>Банковская карта</div>
                  <div>Описание</div>
                </label>
              </div>
              <div class="form_radio_pay">
                <input
                  id="requisites"
                  type="radio"
                  name="radio1"
                  value="6 месяцев"
                ></input>
                <label for="requisites">
                  <div>Банковская карта</div>
                  <div>Описание</div>
                </label>
              </div>
            </div>

            <div
              data-te-modal-init
              class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
              >
                <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                      class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                      id="exampleModalLabel"
                    >
                      Выберите период подписки
                    </h5>
                    <button
                      type="button"
                      class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="formChangeMounth" onChange={handleChange}>
                    <div class="form_radio">
                      <input
                        id="radio-1"
                        type="radio"
                        name="radio"
                        value="1 месяц"
                      ></input>
                      <label for="radio-1">1 месяц</label>
                    </div>
                    <div class="form_radio">
                      <input
                        id="radio-2"
                        type="radio"
                        name="radio"
                        value="6 месяцев"
                      ></input>
                      <label for="radio-2">6 месяцев</label>
                    </div>
                    <div class="form_radio">
                      <input
                        id="radio-3"
                        type="radio"
                        name="radio"
                        value="12 месяцев"
                        defaultChecked
                      ></input>
                      <label for="radio-3">12 месяцев</label>
                    </div>
                  </div>
                  <div class="bottom_popup">
                    <button
                      type="button"
                      class="inline-block "
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={returnMonth}
                    >
                      Отмена
                    </button>
                    <button
                      type="button"
                      class="ml-1 inline-block"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="aboutTheSubscription">
            <ul>
              <li>
                Стоимость подписки <div>н/д</div>
              </li>
              <li>
                Дополнительные модули <div>н/д</div>
              </li>
              <li>
                Итого на {mount} <div class="price">{price} р</div>
              </li>
            </ul>
          </div>
          <button class="buttonForPay" onClick={pay}>
            Оплатить
          </button>
        </div>
      </div>
    </>
  );
}
