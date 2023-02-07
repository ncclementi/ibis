window.BENCHMARK_DATA = {
  "lastUpdate": 1675801517260,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "a54460c1a5f229e26b84f11fae70c91906ee895f",
          "message": "refactor: drop `limit` kwarg from `to_parquet`/`to_csv`",
          "timestamp": "2023-02-07T15:20:22-05:00",
          "tree_id": "2bad8252cb1b90190a4f93041e997427d0a78c26",
          "url": "https://github.com/ibis-project/ibis/commit/a54460c1a5f229e26b84f11fae70c91906ee895f"
        },
        "date": 1675801436086,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3515.869672933607,
            "unit": "iter/sec",
            "range": "stddev: 0.002371124041242774",
            "extra": "mean: 284.42464966729267 usec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.04278192349258,
            "unit": "iter/sec",
            "range": "stddev: 0.012983157039766258",
            "extra": "mean: 14.076025359999562 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.99752363792518,
            "unit": "iter/sec",
            "range": "stddev: 0.00011781630802821173",
            "extra": "mean: 6.896669507936635 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.6547729647443,
            "unit": "iter/sec",
            "range": "stddev: 0.00020305870288217523",
            "extra": "mean: 4.225564468750331 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.25258916653461,
            "unit": "iter/sec",
            "range": "stddev: 0.0027045627405333427",
            "extra": "mean: 443.9335920000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 389328.45188763726,
            "unit": "iter/sec",
            "range": "stddev: 3.5019288710808186e-7",
            "extra": "mean: 2.5685253547526665 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.09692633726965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006061298903622162",
            "extra": "mean: 39.84551679999839 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7478563520683889,
            "unit": "iter/sec",
            "range": "stddev: 0.001698306506015714",
            "extra": "mean: 1.3371551865999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.55193311835896,
            "unit": "iter/sec",
            "range": "stddev: 0.0066560635909717605",
            "extra": "mean: 4.51361441954006 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1440.9188026328725,
            "unit": "iter/sec",
            "range": "stddev: 0.000011620431119032308",
            "extra": "mean: 694.0016315789496 usec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.22183935957301,
            "unit": "iter/sec",
            "range": "stddev: 0.00016234247602343296",
            "extra": "mean: 108.43823677777682 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.64558487731264,
            "unit": "iter/sec",
            "range": "stddev: 0.00021266702281078198",
            "extra": "mean: 4.038028784140913 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 419.08144510420226,
            "unit": "iter/sec",
            "range": "stddev: 0.000023838420804551436",
            "extra": "mean: 2.3861710216050143 msec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119736.52836330798,
            "unit": "iter/sec",
            "range": "stddev: 3.657061246899979e-7",
            "extra": "mean: 8.351670235216538 usec\nrounds: 35589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.66067747929038,
            "unit": "iter/sec",
            "range": "stddev: 0.00011659942098706898",
            "extra": "mean: 14.779633270832685 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.0675839174079,
            "unit": "iter/sec",
            "range": "stddev: 0.00018981731440737148",
            "extra": "mean: 23.219319707317048 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.17432359697467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461787172864101",
            "extra": "mean: 12.169251369862398 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.40386431400901,
            "unit": "iter/sec",
            "range": "stddev: 0.00008665121420184405",
            "extra": "mean: 10.592786717647165 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.32106211041133,
            "unit": "iter/sec",
            "range": "stddev: 0.00009022889412839173",
            "extra": "mean: 5.8712644672902865 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.30385010805992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140521447325475",
            "extra": "mean: 6.199480045455113 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 214.10839340856666,
            "unit": "iter/sec",
            "range": "stddev: 0.008998509478287644",
            "extra": "mean: 4.670531519480306 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.06031254422945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014080513513293105",
            "extra": "mean: 14.07255279629651 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 622.1386928659228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329536919369234",
            "extra": "mean: 1.607358634765882 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 325.1843402947575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000315972540231646",
            "extra": "mean: 3.075178832700148 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.15185752999454,
            "unit": "iter/sec",
            "range": "stddev: 0.0006771460595022983",
            "extra": "mean: 6.283307122642505 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.892935917517728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002215521313830959",
            "extra": "mean: 204.37627160000034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1970346.839684357,
            "unit": "iter/sec",
            "range": "stddev: 2.2098994415517518e-8",
            "extra": "mean: 507.5248579891851 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567189.2707449888,
            "unit": "iter/sec",
            "range": "stddev: 2.6477550050485927e-7",
            "extra": "mean: 1.763079895158322 usec\nrounds: 20965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.98899409870194,
            "unit": "iter/sec",
            "range": "stddev: 0.00014245209068007895",
            "extra": "mean: 6.944975248000674 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1594861.4222642314,
            "unit": "iter/sec",
            "range": "stddev: 9.657945906486722e-8",
            "extra": "mean: 627.0137242270841 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4242059.270763378,
            "unit": "iter/sec",
            "range": "stddev: 1.2937878557046047e-8",
            "extra": "mean: 235.73456573117744 nsec\nrounds: 192345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.68208612791784,
            "unit": "iter/sec",
            "range": "stddev: 0.00009667137750214724",
            "extra": "mean: 7.05805530769182 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.0476050507147,
            "unit": "iter/sec",
            "range": "stddev: 0.000020620587501569806",
            "extra": "mean: 1.9266055565409899 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4526.823037847523,
            "unit": "iter/sec",
            "range": "stddev: 0.000025394147648246495",
            "extra": "mean: 220.90547645429808 usec\nrounds: 1444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.10959080150118,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235715219456505",
            "extra": "mean: 6.245722039473378 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1957707.9983618276,
            "unit": "iter/sec",
            "range": "stddev: 2.099041646542204e-8",
            "extra": "mean: 510.8014069703787 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.80455274759582,
            "unit": "iter/sec",
            "range": "stddev: 0.00038775309796548247",
            "extra": "mean: 9.727195666666484 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.77244463001855,
            "unit": "iter/sec",
            "range": "stddev: 0.0006638309226000025",
            "extra": "mean: 11.01655908988595 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5355073.066240014,
            "unit": "iter/sec",
            "range": "stddev: 6.277244606940131e-9",
            "extra": "mean: 186.73881525620305 nsec\nrounds: 51547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5885533204969341,
            "unit": "iter/sec",
            "range": "stddev: 0.0017660577036258782",
            "extra": "mean: 1.6990814003999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.068370043650496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002787348983678486",
            "extra": "mean: 22.188510457144567 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.6083650504559,
            "unit": "iter/sec",
            "range": "stddev: 0.0002677679474792905",
            "extra": "mean: 15.477871932203362 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5305.335438336356,
            "unit": "iter/sec",
            "range": "stddev: 0.000046876310089363295",
            "extra": "mean: 188.48949545659255 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15323111174051277,
            "unit": "iter/sec",
            "range": "stddev: 0.09063205705401257",
            "extra": "mean: 6.526089830199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 993.4140443422732,
            "unit": "iter/sec",
            "range": "stddev: 0.000012563543082497049",
            "extra": "mean: 1.0066296180280874 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12064833.855943605,
            "unit": "iter/sec",
            "range": "stddev: 3.808742914659069e-9",
            "extra": "mean: 82.88551769039644 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56810.47171784922,
            "unit": "iter/sec",
            "range": "stddev: 9.097304090180935e-7",
            "extra": "mean: 17.602388604807363 usec\nrounds: 12707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.04363028294952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006042555888393862",
            "extra": "mean: 6.287582836363402 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.30313359159413,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859448933133086",
            "extra": "mean: 6.199507583850884 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 142.25438962465518,
            "unit": "iter/sec",
            "range": "stddev: 0.0007164808179285626",
            "extra": "mean: 7.029660052238433 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.643718189628148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005566732989120276",
            "extra": "mean: 73.29380350000137 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5240.303075278877,
            "unit": "iter/sec",
            "range": "stddev: 0.00005042815249410127",
            "extra": "mean: 190.82865735714765 usec\nrounds: 2399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8704893943325684,
            "unit": "iter/sec",
            "range": "stddev: 0.002914521515267126",
            "extra": "mean: 1.1487790736000079 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6061.862157094433,
            "unit": "iter/sec",
            "range": "stddev: 0.00004807106942925884",
            "extra": "mean: 164.96580985921315 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.75582031740592,
            "unit": "iter/sec",
            "range": "stddev: 0.00022413069728441788",
            "extra": "mean: 4.0525893116267095 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 244.38868259555034,
            "unit": "iter/sec",
            "range": "stddev: 0.0003065047212102142",
            "extra": "mean: 4.091842508333107 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.62071606551571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007103807885605147",
            "extra": "mean: 10.796720674159387 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8655878694322193,
            "unit": "iter/sec",
            "range": "stddev: 0.005284693693585205",
            "extra": "mean: 1.1552842124000051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.44239701489879,
            "unit": "iter/sec",
            "range": "stddev: 0.028276226106195086",
            "extra": "mean: 33.96462589285676 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.19620720115066,
            "unit": "iter/sec",
            "range": "stddev: 0.00018915905113066407",
            "extra": "mean: 10.395420246756242 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10952.132358602637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017055772052276221",
            "extra": "mean: 91.30642027116518 usec\nrounds: 6196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.93271029891955,
            "unit": "iter/sec",
            "range": "stddev: 0.0003939110170119645",
            "extra": "mean: 4.505870264248597 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4396480.793619723,
            "unit": "iter/sec",
            "range": "stddev: 1.4634439273887076e-8",
            "extra": "mean: 227.454649967537 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10388.917512714093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021213229430959216",
            "extra": "mean: 96.25641928297023 usec\nrounds: 4491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.26708383071482,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954410824198854",
            "extra": "mean: 10.721896288888564 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.8221548004589,
            "unit": "iter/sec",
            "range": "stddev: 0.000014516125000517523",
            "extra": "mean: 3.761913677776995 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.4251473762063,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317136854664458",
            "extra": "mean: 11.309000094118963 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4477.153398090396,
            "unit": "iter/sec",
            "range": "stddev: 0.002817281727515948",
            "extra": "mean: 223.35620674210583 usec\nrounds: 2462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5763122344822393,
            "unit": "iter/sec",
            "range": "stddev: 0.0017915104219932997",
            "extra": "mean: 634.3920818000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5222.884093971197,
            "unit": "iter/sec",
            "range": "stddev: 0.000047068529645629686",
            "extra": "mean: 191.46509514815872 usec\nrounds: 2123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19271.377273018163,
            "unit": "iter/sec",
            "range": "stddev: 0.000013277355219401975",
            "extra": "mean: 51.89042722961472 usec\nrounds: 6177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6157.508726540954,
            "unit": "iter/sec",
            "range": "stddev: 0.00004720665737484418",
            "extra": "mean: 162.40334271710577 usec\nrounds: 2664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.94307105915317,
            "unit": "iter/sec",
            "range": "stddev: 0.0003413376822828249",
            "extra": "mean: 8.200547938594326 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.70345764854935,
            "unit": "iter/sec",
            "range": "stddev: 0.0007743526697765458",
            "extra": "mean: 6.816471922534052 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.11557685927372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002738550517243782",
            "extra": "mean: 4.046689458874038 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1564316.476223587,
            "unit": "iter/sec",
            "range": "stddev: 1.041419368609001e-7",
            "extra": "mean: 639.2568353010623 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9763.852010713777,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430445135889677",
            "extra": "mean: 102.41859451604859 usec\nrounds: 3793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.50386369277116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006698806778853645",
            "extra": "mean: 11.298941744186003 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.23605261324923,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040925751613922",
            "extra": "mean: 10.96057941304204 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.8693520112058,
            "unit": "iter/sec",
            "range": "stddev: 0.00010619376632333533",
            "extra": "mean: 3.6249042987543616 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.785487304678966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005414626572131494",
            "extra": "mean: 26.465187333343465 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.99616307894673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004056146974502615",
            "extra": "mean: 18.519834428567073 msec\nrounds: 49"
          }
        ]
      }
    ]
  }
}