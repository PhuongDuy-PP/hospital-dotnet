using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hospital_API.DTOs;
using Hospital_API.Models;
using Hospital_API.Interfaces;
namespace Hospital_API.Services
{
public class MedicineSupplierService : IMedicineSupplierService
{
    private readonly IMedicineSupplierRepository _repository;
    public MedicineSupplierService(IMedicineSupplierRepository repository)
    {
        _repository = repository;
    }
    public async Task<IEnumerable<MedicineSupplierDTO>> GetAllAsync()
    {
        var suppliers = await _repository.GetAllAsync();
        return suppliers.Select(s => MapToDTO(s)).ToList();
    }

    public async Task<MedicineSupplierDTO> GetByIdAsync(int id)
    {
        var supplier = await _repository.GetByIdAsync(id);
        return supplier == null ? null : MapToDTO(supplier);
    }

    public async Task<MedicineSupplierDTO> AddAsync(MedicineSupplierCreateDTO dto)
    {
        var supplier = new MedicineSupplier
        {
            SupplierName = dto.SupplierName,
            Phone = dto.Phone,
            Address = dto.Address
        };
        var result = await _repository.AddAsync(supplier);
        return MapToDTO(result);
    }

    public async Task<MedicineSupplierDTO> UpdateAsync(MedicineSupplierDTO dto)
    {
        var supplier = new MedicineSupplier
        {
            SupplierId = dto.SupplierId,
            SupplierName = dto.SupplierName,
            Phone = dto.Phone,
            Address = dto.Address
        };
        var result = await _repository.UpdateAsync(supplier);
        return MapToDTO(result);
    }

    public async Task<MedicineSupplierDTO> DeleteAsync(int id)
    {
        var result = await _repository.DeleteAsync(id);
        return result == null ? null : MapToDTO(result);
    }

    private MedicineSupplierDTO MapToDTO(MedicineSupplier supplier)
    {
        return new MedicineSupplierDTO
        {
            SupplierId = supplier.SupplierId,
            SupplierName = supplier.SupplierName,
            Phone = supplier.Phone,
            Address = supplier.Address,
            Medicines = supplier.Medicines?.Select(m => new MedicinesDTO
            {
                Id = m.Id,
                Name = m.Name,
                Quantity = m.Quantity,
                Unit = m.Unit,
                Price = m.Price,
                SupplierId = m.SupplierId
            }).ToList()
        };
    }
}
}
