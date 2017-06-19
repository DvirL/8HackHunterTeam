using System.Collections.Generic;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.DAL.Interfaces
{
    public interface IDestinationsStorage
    {
        IEnumerable<Destination> Destinations { get; }
        Destination GetDestination(string destintionId);
    }
}