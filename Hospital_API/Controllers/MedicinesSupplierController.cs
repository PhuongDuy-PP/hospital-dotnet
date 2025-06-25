using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Hospital_API.Services;
using Hospital_API.DTOs;
using Hospital_API.Interfaces;
namespace Hospital_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineSupplierController : ControllerBase
    {
        private readonly IMedicineSupplierService _service;
        public MedicineSupplierController(IMedicineSupplierService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineSupplierDTO>>> GetAll()
        {
            var suppliers = await _service.GetAllAsync();
            return Ok(suppliers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineSupplierDTO>> GetById(int id)
        {
            var supplier = await _service.GetByIdAsync(id);
            if (supplier == null) return NotFound();
            return Ok(supplier);
        }

        [HttpPost]
        public async Task<ActionResult<MedicineSupplierDTO>> Create([FromBody] MedicineSupplierCreateDTO dto)
        {
            var created = await _service.AddAsync(dto);
            return Ok(created);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<MedicineSupplierDTO>> Update(int id, [FromBody] MedicineSupplierDTO dto)
        {
            dto.SupplierId = id;
            var updated = await _service.UpdateAsync(dto);
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<MedicineSupplierDTO>> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);
            if (deleted == null) return NotFound();
            return Ok(deleted);
        }
    }
}
