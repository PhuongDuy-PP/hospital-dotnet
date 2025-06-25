using Hospital_API.Interfaces;
using Hospital_API.Models;
using Hospital_API.DTOs;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_API.Services
{
    public class PrescriptionsService : IPrescriptionsService
    {
        private readonly IPrescriptionsRepository _repo;
        public PrescriptionsService(IPrescriptionsRepository repo)
        {
            _repo = repo;
        }

        public async Task<IEnumerable<PrescriptionsDTO>> GetAllAsync()
        {
            var prescriptions = await _repo.GetAllAsync();
            return prescriptions.Select(MapToDTO);
        }

        public async Task<PrescriptionsDTO> GetByIdAsync(int id)
        {
            var prescription = await _repo.GetByIdAsync(id);
            return prescription == null ? null : MapToDTO(prescription);
        }

        public async Task<PrescriptionsDTO> AddAsync(PrescriptionsDTO dto)
        {
            var prescription = new Prescriptions
            {
                MedicalRecordID = dto.MedicalRecordID,
                PrescribedBy = dto.PrescribedBy,
                CreatedAt = dto.CreatedAt
            };
            var result = await _repo.AddAsync(prescription);
            return MapToDTO(result);
        }

        public async Task<PrescriptionsDTO> UpdateAsync(PrescriptionsDTO dto)
        {
            var prescription = new Prescriptions
            {
                Id = dto.Id,
                MedicalRecordID = dto.MedicalRecordID,
                PrescribedBy = dto.PrescribedBy,
                CreatedAt = dto.CreatedAt
            };
            var result = await _repo.UpdateAsync(prescription);
            return MapToDTO(result);
        }

        public async Task<PrescriptionsDTO> DeleteAsync(int id)
        {
            var result = await _repo.DeleteAsync(id);
            return result == null ? null : MapToDTO(result);
        }

        private PrescriptionsDTO MapToDTO(Prescriptions prescription)
        {
            return new PrescriptionsDTO
            {
                Id = prescription.Id,
                MedicalRecordID = prescription.MedicalRecordID,
                PrescribedBy = prescription.PrescribedBy,
                CreatedAt = prescription.CreatedAt
            };
        }
    }
}