// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil arka plan, "Update" butonuna turuncu arka plan, ve "Delete" butonuna kırmızı arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?
export default function ButtonVariants() {
  return (
    <>
      <span className="wrapper flex justify-center items-center py-10 gap-5 flex-wrap px-10 ">
        <button className="button-create py-3 px-6 bg-green-500 rounded-xl text-white font-bold hover:bg-green-400 ">
          Create
        </button>
        <button className="button-update py-3 px-6 bg-orange-500 rounded-xl text-white font-bold hover:bg-orange-400 ">
          Update
        </button>
        <button className="button-delete py-3 px-6 bg-red-500 rounded-xl text-white font-bold hover:bg-red-400">
          Delete
        </button>
      </span>
      <div className="flex justify-center ">
        <button className="bg-blue-500 px-12 py-3 rounded-xl text-white font-bold hover:bg-blue-400 text-center">
          Testing Tailwind
        </button>
      </div>
    </>
  );
}
