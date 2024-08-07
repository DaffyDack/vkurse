import { useState, useEffect } from 'preact/hooks'
import Layout from "../../layouts/Layout.astro";
import "./style.scss"

export default function Registration({ }) {

    const [loader, setLoader] = useState(false)

    useEffect(() => {

    }, [])

    return (
                <div
                    class="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 space-y-8"
                >

                    <main
                        class="registration flex flex-col gap-y-20 md:gap-y-32 overflow-hidden"
                    >
                        <div
                            data-te-modal-init
                            data-te-backdrop="false"
                            class="static left-0 top-0 z-[1055] block h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalComponents"
                            aria-labelledby="exampleModalComponentsLabel"
                            aria-hidden="true"
                        >
                            <div
                                data-te-modal-dialog-ref
                                class="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[640px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[640px]"
                            >
                                <div
                                    class="wrapper_form min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
                                >
                                    <div
                                        class="roboto-img flex flex-shrink-0 items-center justify-between rounded-t-md border-neutral-100 border-opacity-100 pt-[32px] pl-[32px] pb-[32px] dark:border-opacity-50"
                                    >
                                        <h5
                                            class="Reg_ text-xl  leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="exampleModalComponentsLabel"
                                        >
                                            Вход
                                        </h5>
                                    </div>
                                    <div
                                        class="relative flex-auto p-[48px] pt-0"
                                        data-te-modal-body-ref
                                    >
                                        <ul
                                            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                                            role="tablist"
                                            data-te-nav-ref
                                            id="tablist"
                                        >
                                            <li
                                                role="presentation"
                                                class="flex-auto text-center p-[8px]"
                                            >
                                                <a
                                                    href="#tabs-home"
                                                    class="block px-7 pb-3.5 pt-4 text-xs  uppercase text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                                    data-te-toggle="pill"
                                                    data-te-target="#tabs-home"
                                                    data-te-nav-active
                                                    role="tab"
                                                    aria-controls="tabs-home"
                                                    aria-selected="false"
                                                    data-name="Регистрация"
                                                >У меня есть аккаунт</a
                                                >
                                            </li>
                                            <li
                                                role="presentation"
                                                class="flex-auto text-center p-[8px]"
                                            >
                                                <a
                                                    href="#tabs-profile"
                                                    class="block px-7 pb-3.5 pt-4 text-xs  uppercase text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                                    data-te-toggle="pill"
                                                    data-te-target="#tabs-profile"
                                                    role="tab"
                                                    aria-controls="tabs-profile"
                                                    aria-selected="true"
                                                    data-name="Регистрация"
                                                >Новый пользователь</a
                                                >
                                            </li>
                                        </ul>

                                        <div>
                                            <div
                                                class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                                id="tabs-home"
                                                role="tabpanel"
                                                aria-labelledby="tabs-home-tab"
                                                data-te-tab-active
                                            >
                                                reg
                                            </div>
                                            <div
                                                class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                                id="tabs-profile"
                                                role="tabpanel"
                                                aria-labelledby="tabs-profile-tab"
                                            >
                                                auth
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
    )
}