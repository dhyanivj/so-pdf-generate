import "./App.css";

function App() {
  return (
    <>
      <div class="mx-auto flex w-full max-w-sm flex-col gap-6 p-5">
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-semibold">Download Rate List</h1>
        </div>
        <div class="form-group">
          <div class="form-field">
            <label class="form-label">Discount type</label>
            <select class="select">
              <option>GLR</option>
              <option>BLR</option>
              <option>SLR</option>
              <option>PLR</option>
              <option>C2C</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label">Packing type</label>
            <div class="form-control">
              <select class="select">
                <option>Std. Packing</option>
                <option>LD</option>
                <option>Taiwan</option>
                <option>Taiwan + photo</option>
              </select>
            </div>
          </div>
          <div class="form-field pt-5">
            <div class="form-control justify-between">
              <button type="button" class="btn btn-primary w-full font-bold">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
