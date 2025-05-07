import React, { useState } from "react";
import Swal from "sweetalert2";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null); // untuk cek item yg diklik

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmed = newTask.trim();
  
    if (!trimmed) {
      setError("");
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Tugas tidak boleh kosong!",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }
  
    if (trimmed.length < 3) {
      setError("");
      Swal.fire({
        icon: "error",
        title: "Terlalu pendek!",
        text: "Tugas minimal 3 karakter!",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }
  
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask("");
    setError("");
  
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Tugas berhasil ditambahkan!",
      timer: 1500,
      showConfirmButton: false,
    });
  };
  

  const handleDeleteTask = (indexToDelete) => {
    Swal.fire({
      title: 'Yakin hapus tugas ini?',
      text: 'Tugas akan dihapus permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Hapus',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(indexToDelete, 1);
        setTasks(updatedTasks);

        Swal.fire('Dihapus!', 'Tugas berhasil dihapus.', 'success');
      }
    });
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    setActiveIndex(null); // tutup menu setelah toggle
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-colors duration-300">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">📋 Penampilan Data Tugas</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-transparent border border-white transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Form tambah tugas */}
          <form onSubmit={handleAddTask} className="flex gap-2">
            <input
              type="text"
              placeholder="Tambahkan tugas baru..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 px-4 py-2 rounded border focus:outline-none dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition"
            >
              Tambah
            </button>
          </form>

          {/* Validasi */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Filter */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setFilter("all")}
              className="px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Semua
            </button>
            <button
              onClick={() => setFilter("completed")}
              className="px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Selesai
            </button>
            <button
              onClick={() => setFilter("uncompleted")}
              className="px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Belum
            </button>
          </div>

          {/* Tugas */}
          <div className="grid gap-3">
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className={`p-4 rounded shadow-md border transition-all
                  ${task.completed ? "bg-green-100 dark:bg-green-900 border-green-400" : "bg-white dark:bg-gray-800 border-gray-300"}
                  hover:border-blue-400 cursor-pointer`}
              >
                <div className="flex justify-between items-center">
                  <span className={`${task.completed ? "line-through" : ""}`}>
                    {task.title}
                  </span>
                  {task.completed && <span className="text-green-500 font-bold">✔</span>}
                </div>

                {/* Tombol muncul saat diklik */}
                {activeIndex === index && (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleTask(index);
                      }}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                    >
                      Selesai
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTask(index);
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
