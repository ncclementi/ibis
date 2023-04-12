window.BENCHMARK_DATA = {
  "lastUpdate": 1681321149973,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "anja@voltrondata.com",
            "name": "anjakefala",
            "username": "anjakefala"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b95fe96b9b52ee11e97491cb4903820f24cc56a3",
          "message": "test: ignore all DeprecatedWarning calls for pkg_resources.declare_namespace\n\nA lot of third party dependencies (e.g.\nhttps://github.com/matplotlib/matplotlib/issues/25244) are still using\nit. Helpful to ignore for now.",
          "timestamp": "2023-04-12T13:31:49-04:00",
          "tree_id": "014c530b0f41e40e24374f4b38da972b65759918",
          "url": "https://github.com/ibis-project/ibis/commit/b95fe96b9b52ee11e97491cb4903820f24cc56a3"
        },
        "date": 1681321039732,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 157.9977600841229,
            "unit": "iter/sec",
            "range": "stddev: 0.009618861298592607",
            "extra": "mean: 6.32920365116296 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1274793.2450792487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031537672157520386",
            "extra": "mean: 784.440930998057 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.49993455126819825,
            "unit": "iter/sec",
            "range": "stddev: 0.018182306581375183",
            "extra": "mean: 2.000261829199985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4823465688414728,
            "unit": "iter/sec",
            "range": "stddev: 0.03984482025262506",
            "extra": "mean: 2.0731981206 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4317611.483359947,
            "unit": "iter/sec",
            "range": "stddev: 4.4795987820020553e-7",
            "extra": "mean: 231.60953778611227 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1272.6948768489228,
            "unit": "iter/sec",
            "range": "stddev: 0.00035697158541982295",
            "extra": "mean: 785.7342857196923 usec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1541377.804175828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018754278908046004",
            "extra": "mean: 648.7702088941771 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 64.67749544248785,
            "unit": "iter/sec",
            "range": "stddev: 0.01588363716978317",
            "extra": "mean: 15.461328444438827 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.69447428187003,
            "unit": "iter/sec",
            "range": "stddev: 0.0015661693613338954",
            "extra": "mean: 13.756203753844321 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.2148528374867,
            "unit": "iter/sec",
            "range": "stddev: 0.0009695076666393586",
            "extra": "mean: 31.041582125011402 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.72835396326522,
            "unit": "iter/sec",
            "range": "stddev: 0.0011899133844990308",
            "extra": "mean: 21.400283022726086 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 127.47866554405697,
            "unit": "iter/sec",
            "range": "stddev: 0.008919974559730414",
            "extra": "mean: 7.844449859371938 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1603.3239644471762,
            "unit": "iter/sec",
            "range": "stddev: 0.00016865190916669",
            "extra": "mean: 623.7042682417577 usec\nrounds: 973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.14598417467256,
            "unit": "iter/sec",
            "range": "stddev: 0.0013000290825008808",
            "extra": "mean: 14.25598360000012 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 93.10995373988094,
            "unit": "iter/sec",
            "range": "stddev: 0.00039517035687233374",
            "extra": "mean: 10.73999030000247 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5462513606053547,
            "unit": "iter/sec",
            "range": "stddev: 0.008886697300986445",
            "extra": "mean: 646.7253807999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.1369897740158175,
            "unit": "iter/sec",
            "range": "stddev: 0.010840124220234275",
            "extra": "mean: 241.72165139999606 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9437.686710250286,
            "unit": "iter/sec",
            "range": "stddev: 0.00013405076879314227",
            "extra": "mean: 105.9581686382849 usec\nrounds: 2366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 76.81939085569792,
            "unit": "iter/sec",
            "range": "stddev: 0.0013563961256994226",
            "extra": "mean: 13.017546596776056 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 117.63448231343479,
            "unit": "iter/sec",
            "range": "stddev: 0.0012369398412708204",
            "extra": "mean: 8.500908750000017 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.94911704443204,
            "unit": "iter/sec",
            "range": "stddev: 0.0018986991587182122",
            "extra": "mean: 13.342385333334487 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 191.1145332849887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559763828718089",
            "extra": "mean: 5.23246444323942 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1528382.666969405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021099670985964243",
            "extra": "mean: 654.2864045840543 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1257.4386587302329,
            "unit": "iter/sec",
            "range": "stddev: 0.005038324338346866",
            "extra": "mean: 795.267421640913 usec\nrounds: 1072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.70870292623378,
            "unit": "iter/sec",
            "range": "stddev: 0.00541611674868332",
            "extra": "mean: 8.216339308176575 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1622.7968989164547,
            "unit": "iter/sec",
            "range": "stddev: 0.00015049993807469202",
            "extra": "mean: 616.2200585099112 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.7839354451332,
            "unit": "iter/sec",
            "range": "stddev: 0.0017073400810878854",
            "extra": "mean: 13.930693459462566 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.8615477430294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007757617450956066",
            "extra": "mean: 11.646657045978818 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58035.634907591666,
            "unit": "iter/sec",
            "range": "stddev: 0.000007425801965061264",
            "extra": "mean: 17.2307927981191 usec\nrounds: 10941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.4834173454071,
            "unit": "iter/sec",
            "range": "stddev: 0.0012757949019518572",
            "extra": "mean: 29.865529843750238 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 52.463064469079114,
            "unit": "iter/sec",
            "range": "stddev: 0.03533704872167595",
            "extra": "mean: 19.061029128204737 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.84473414688424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006401216846721131",
            "extra": "mean: 5.054468618091085 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 68.14302546243755,
            "unit": "iter/sec",
            "range": "stddev: 0.0020744566335744387",
            "extra": "mean: 14.675016162163649 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1557.5970756898143,
            "unit": "iter/sec",
            "range": "stddev: 0.00027265764549975964",
            "extra": "mean: 642.0145592255489 usec\nrounds: 878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.36048032360814,
            "unit": "iter/sec",
            "range": "stddev: 0.0015811249198131082",
            "extra": "mean: 14.628334898557641 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 873.2656007412694,
            "unit": "iter/sec",
            "range": "stddev: 0.00011818161300528463",
            "extra": "mean: 1.1451269798686132 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.73786353848921,
            "unit": "iter/sec",
            "range": "stddev: 0.0015500134350928518",
            "extra": "mean: 18.268889857143307 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 187.45290011559044,
            "unit": "iter/sec",
            "range": "stddev: 0.000618430437100202",
            "extra": "mean: 5.334673400002683 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.64398499952843,
            "unit": "iter/sec",
            "range": "stddev: 0.0016281131422015234",
            "extra": "mean: 13.957905887096903 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.02982736687397,
            "unit": "iter/sec",
            "range": "stddev: 0.00132097902512422",
            "extra": "mean: 5.207524339901086 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 63.84123149263707,
            "unit": "iter/sec",
            "range": "stddev: 0.02255386797755562",
            "extra": "mean: 15.66385824050609 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122527.07715088155,
            "unit": "iter/sec",
            "range": "stddev: 0.000006356425974211263",
            "extra": "mean: 8.161461313311065 usec\nrounds: 33112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5052290928688894,
            "unit": "iter/sec",
            "range": "stddev: 0.019280426423311375",
            "extra": "mean: 1.9793001117999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4975407734263309,
            "unit": "iter/sec",
            "range": "stddev: 0.021119865335010306",
            "extra": "mean: 2.009885527799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 565.8393509683609,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216198795070459",
            "extra": "mean: 1.767286065008786 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.95206734294381,
            "unit": "iter/sec",
            "range": "stddev: 0.0020394330511304738",
            "extra": "mean: 15.885101827590546 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.561417321742068,
            "unit": "iter/sec",
            "range": "stddev: 0.004608636868471966",
            "extra": "mean: 86.49458558332886 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.46122589679148,
            "unit": "iter/sec",
            "range": "stddev: 0.00227238740614928",
            "extra": "mean: 30.805983827580633 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5338877.172220208,
            "unit": "iter/sec",
            "range": "stddev: 1.6542964711411806e-7",
            "extra": "mean: 187.30530179703737 nsec\nrounds: 32787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 59.41609613832166,
            "unit": "iter/sec",
            "range": "stddev: 0.022996826088493495",
            "extra": "mean: 16.83045613888841 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1510.695251252677,
            "unit": "iter/sec",
            "range": "stddev: 0.0002891974562559804",
            "extra": "mean: 661.9468745736735 usec\nrounds: 1467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8028.766495723016,
            "unit": "iter/sec",
            "range": "stddev: 0.00014589189014224167",
            "extra": "mean: 124.55213394644215 usec\nrounds: 3479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9875908955106172,
            "unit": "iter/sec",
            "range": "stddev: 0.01373802967218598",
            "extra": "mean: 1.0125650252000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 84.36429311668702,
            "unit": "iter/sec",
            "range": "stddev: 0.0009231052420114347",
            "extra": "mean: 11.853355999994776 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 384.17632883233165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005064097045049264",
            "extra": "mean: 2.6029714090907357 msec\nrounds: 352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4568289.465123772,
            "unit": "iter/sec",
            "range": "stddev: 7.871372958801886e-7",
            "extra": "mean: 218.90031435916703 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1531.9881942402815,
            "unit": "iter/sec",
            "range": "stddev: 0.00032681284019502125",
            "extra": "mean: 652.7465444966458 usec\nrounds: 854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.14396727130327,
            "unit": "iter/sec",
            "range": "stddev: 0.0017779057262227408",
            "extra": "mean: 14.056005566663998 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.514478505021234,
            "unit": "iter/sec",
            "range": "stddev: 0.003399832359525135",
            "extra": "mean: 133.07643362500698 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 171.87702956051436,
            "unit": "iter/sec",
            "range": "stddev: 0.0008106489148109298",
            "extra": "mean: 5.818113115853684 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 198.99606106146413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005685272792856725",
            "extra": "mean: 5.025225095742618 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1534.348267347352,
            "unit": "iter/sec",
            "range": "stddev: 0.00023736905250971673",
            "extra": "mean: 651.7425158819017 usec\nrounds: 913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3179.320438760809,
            "unit": "iter/sec",
            "range": "stddev: 0.00007801814141026975",
            "extra": "mean: 314.532623955881 usec\nrounds: 1795"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.42176330959636,
            "unit": "iter/sec",
            "range": "stddev: 0.0016175216644661874",
            "extra": "mean: 26.026915837832888 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 615162.9426279622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014961715148648727",
            "extra": "mean: 1.6255855655544245 usec\nrounds: 20534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.13972702124829,
            "unit": "iter/sec",
            "range": "stddev: 0.0009455790598886991",
            "extra": "mean: 8.18734431775857 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 429940.9820239226,
            "unit": "iter/sec",
            "range": "stddev: 2.707215832555315e-7",
            "extra": "mean: 2.325900627785137 usec\nrounds: 1751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.51884675149454,
            "unit": "iter/sec",
            "range": "stddev: 0.0034444731157492973",
            "extra": "mean: 36.338732107140004 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 225.8165035929359,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642136170402441",
            "extra": "mean: 4.428374295452879 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 173.3094105256499,
            "unit": "iter/sec",
            "range": "stddev: 0.0054235616183719",
            "extra": "mean: 5.770027126438119 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 197.8418702364294,
            "unit": "iter/sec",
            "range": "stddev: 0.0008212574407142683",
            "extra": "mean: 5.054541785340776 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.29696569372943,
            "unit": "iter/sec",
            "range": "stddev: 0.0013234130538985471",
            "extra": "mean: 14.025842338027436 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.12661729014839,
            "unit": "iter/sec",
            "range": "stddev: 0.0008373906642346879",
            "extra": "mean: 8.121720729511278 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 203.0729405542609,
            "unit": "iter/sec",
            "range": "stddev: 0.0010424906393113336",
            "extra": "mean: 4.924338994996731 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1537.4836642355529,
            "unit": "iter/sec",
            "range": "stddev: 0.00027794357272312186",
            "extra": "mean: 650.413414634364 usec\nrounds: 1107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1535626.0895929825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017156020618071503",
            "extra": "mean: 651.2001891456858 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.81009942007033,
            "unit": "iter/sec",
            "range": "stddev: 0.0012084801575807237",
            "extra": "mean: 13.190854617653425 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10083985893515844,
            "unit": "iter/sec",
            "range": "stddev: 0.03279900425415211",
            "extra": "mean: 9.916713594800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 58.973686523102955,
            "unit": "iter/sec",
            "range": "stddev: 0.021627636658896148",
            "extra": "mean: 16.956715086960855 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10250.559392376152,
            "unit": "iter/sec",
            "range": "stddev: 0.00006881778786939967",
            "extra": "mean: 97.55565152315 usec\nrounds: 5811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.3286132607987,
            "unit": "iter/sec",
            "range": "stddev: 0.001303924925621755",
            "extra": "mean: 12.44886422666544 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.209111005441436,
            "unit": "iter/sec",
            "range": "stddev: 0.0021444414542858854",
            "extra": "mean: 25.504276285713804 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8877832.032483801,
            "unit": "iter/sec",
            "range": "stddev: 2.0915706827715316e-7",
            "extra": "mean: 112.64011262441414 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 506.57197766953385,
            "unit": "iter/sec",
            "range": "stddev: 0.0004255389711048448",
            "extra": "mean: 1.9740531337727445 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.32236985179533,
            "unit": "iter/sec",
            "range": "stddev: 0.0013612242388204028",
            "extra": "mean: 14.425357963640097 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.68066649226587,
            "unit": "iter/sec",
            "range": "stddev: 0.002583561703214811",
            "extra": "mean: 53.53128061110763 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 105.64137969590679,
            "unit": "iter/sec",
            "range": "stddev: 0.0013496631309449975",
            "extra": "mean: 9.465987692309042 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5939.797381639262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965339773672723",
            "extra": "mean: 168.35591111089727 usec\nrounds: 1485"
          }
        ]
      }
    ]
  }
}