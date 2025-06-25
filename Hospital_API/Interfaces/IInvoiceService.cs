using Hospital_API.DTOs;

namespace Hospital_API.Interfaces
{
    public interface IInvoiceService
    {
        Task<IEnumerable<InvoiceDTO>> GetAllAsync();
        Task<InvoiceDTO?> GetByIdAsync(int id);
        Task<InvoiceDTO?> GetByAppointmentIdAsync(int appointmentId);
        Task<InvoiceDTO> CreateAsync(InvoiceCreateDTO dto);
        Task<InvoiceDTO?> UpdateAsync(InvoiceUpdateDTO dto);
        Task<bool> DeleteAsync(int id);
    }

}