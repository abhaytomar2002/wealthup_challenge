import image from '../../public/13.png'
import { TodoItem } from "../components/todoItem";
import { prisma } from "./db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function MainPage(){

  const todos = await getTodos();

  return (
    <div>
      <div className=" Header bg-gradient-to-r from-[#159C98] to-[#138F9E] text-center p-8 place-content-center">
        <div className=" text-white text-[60px] font-semibold">
          Backed by the best
        </div>
        <div className="font-poppins text-center text-white text-[30px] font-light">
          Wealthup is backed and supported by 
        </div>
        <div className="place-content-center pt-10">
          <img src="../../public/13.png" alt="Image not showing" />
        </div>
      </div>
      <div className="bg-[#0A5783] text-center p-10">
        <div className="text-white text-[40px] font-extrabold">
          Transforming lives - Financially!
        </div>

        <div className="Testimonials flex flex-row text-left">
          <div className="p-20 pt-[140px]">
            <div className="w-[767px] h-[231px] relative">
              <div className="w-[373px] h-[123px] left-0 top-0 absolute">
                <img
                  className="w-[123px] h-[123px] left-0 top-0 absolute"
                  src="../../public/Untitled (120 × 120 px) 1.png"
                />
                <div className="left-[154px] top-[1px] absolute text-white text-[24px] font-medium">
                  Simrin Sirur
                </div>
                <div className="left-[153px] top-[33px] absolute text-white text-[22px] font-normal">
                  Journalist
                </div>
                <div className="left-[154px] top-[57px] absolute text-white text-[22px] font-normal">
                  The Print, Gurugram
                </div>
              </div>
              <div className="w-[520px] left-[147px] top-[99px] absolute text-white text-[22px] font-normal">
                "I was afraid to learn about investments and savings because it
                seemed to fly over my head, but Ankit was extremely patient and
                walked me through everything... I now feel more confident to
                handle my own money."
              </div>
            </div>
          </div>
          <div>
            <div className="w-[17px] h-[34px] relative">
              <div className="w-[24.04px] h-[0px] left-0 top-[200px] absolute origin-top-left rotate-45 border border-white"></div>
              <div className="w-[24.04px] h-[0px] left-0 top-[234px] absolute origin-top-left -rotate-45 border border-white"></div>
            </div>
          </div>
          <div className="p-20">
            <img className="w-[300px] h-[300px]" src="../../public/11.png" />
          </div>
        </div>
      </div>
      <div className=" Footer bg-gradient-to-r from-[#159C98] to-[#138F9E] text-center p-8 place-content-center">
        <img
          className="w-[1370px] h-[163px]"
          src="../../public/Scroller with logos.png"
        />
      </div>
      <div className='h-[100px] p-10'>
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Todos</h1>
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/new"
          >
            New
          </Link>
        </header>
        <ul className="pl-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
