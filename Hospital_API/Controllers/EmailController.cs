using Microsoft.AspNetCore.Mvc;
using Hospital_API.DTOs;
using Hospital_API.Interfaces;

namespace Hospital_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromBody] EmailDTO emailDto)
        {
            try
            {
                var result = await _emailService.SendEmailAsync(emailDto);
                if (result)
                    return Ok(new { message = "Email sent successfully" });
                return BadRequest(new { message = "Failed to send email" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while sending the email", error = ex.Message });
            }
        }
    }
} 