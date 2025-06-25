using Hospital_API.Interfaces;
using Hospital_API.DTOs;
using Hospital_API.Models;

namespace Hospital_API.Services
{
    public class MedicinesService: IMedicinesService
    {
        private readonly IMedicinesRepository medicinesRepository;
        public MedicinesService(IMedicinesRepository medicines)
        {
            medicinesRepository = medicines;
        }
        //create medicine
        public async Task<MedicinesDTO> AddMedicineAsync(MedicinesDTO medicinesDTO)
        {
            var existingMedicine = (await medicinesRepository.GetAllMedicinesAsync())
        .FirstOrDefault(m => m.Name == medicinesDTO.Name && m.SupplierId == medicinesDTO.SupplierId);
            if (existingMedicine != null)
            {
                existingMedicine.Quantity += medicinesDTO.Quantity;
                var updatedMedicine = await medicinesRepository.UpdateMedicineAsync(existingMedicine);
                return MapToDTO(updatedMedicine);
            }
            else
            {
                var medicines = new Medicines
                {
                    Name = medicinesDTO.Name,
                    Quantity = medicinesDTO.Quantity,
                    Unit = medicinesDTO.Unit,
                    Price = medicinesDTO.Price,
                    SupplierId = medicinesDTO.SupplierId 
                };
                var addedMedicines = await medicinesRepository.AddMedicineAsync(medicines);
                return MapToDTO(addedMedicines);
            }
        }
        //update medicine
        public async Task<MedicinesDTO> UpdateMedicineAsync(MedicinesDTO medicinesDTO)
        {
            var medicines = new Medicines
            {
                Id = medicinesDTO.Id,
                Name = medicinesDTO.Name,
                Quantity = medicinesDTO.Quantity,
                Unit = medicinesDTO.Unit,
                Price = medicinesDTO.Price,
                SupplierId = medicinesDTO.SupplierId 
            };
            var updatedMedicines = await medicinesRepository.UpdateMedicineAsync(medicines);
            if (updatedMedicines == null)
            {
                return null; // or throw an exception
            }
            return MapToDTO(updatedMedicines);
        }
        //get all medicines
        public async Task<IEnumerable<MedicinesDTO>> GetAllMedicinesAsync()
        {
            var medicines = await medicinesRepository.GetAllMedicinesAsync();
            return medicines.Select(m => MapToDTO(m)).ToList();
        }
        //delete medicine
        public async Task<MedicinesDTO> DeleteMedicineAsync(int id)
        {
            var deletedMedicines = await medicinesRepository.DeleteMedicineAsync(id);
            if (deletedMedicines == null)
            {
                return null; 
            }
            return MapToDTO(deletedMedicines);
        }
        //get medicine by id
        public async Task<MedicinesDTO> GetMedicineByIdAsync(int id)
        {
            var medicines = await medicinesRepository.GetMedicineByIdAsync(id);
            if (medicines == null)
            {
                return null; 
            }
            return MapToDTO(medicines);
        }
        private MedicinesDTO MapToDTO(Medicines medicines)
        {
            return new MedicinesDTO
            {
                Id = medicines.Id,
                Quantity = medicines.Quantity,
                Name = medicines.Name,
                Unit = medicines.Unit,
                Price = medicines.Price,
                SupplierId = medicines.SupplierId 
            };
        }
    }
}