window.BENCHMARK_DATA = {
  "lastUpdate": 1682435457521,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b0f892fd6903d070ca0b9115327be6050a577002",
          "message": "test(bigquery): rename client fixture to con",
          "timestamp": "2023-04-25T10:55:28-04:00",
          "tree_id": "dc8756416b0d578fa9b53ace896a84be3c01a148",
          "url": "https://github.com/ibis-project/ibis/commit/b0f892fd6903d070ca0b9115327be6050a577002"
        },
        "date": 1682435377225,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 91.58150867264273,
            "unit": "iter/sec",
            "range": "stddev: 0.008150460042074772",
            "extra": "mean: 10.91923483783709 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.31662304263585,
            "unit": "iter/sec",
            "range": "stddev: 0.000257791882079079",
            "extra": "mean: 3.517205534092324 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.69066663153521,
            "unit": "iter/sec",
            "range": "stddev: 0.014800897952386075",
            "extra": "mean: 25.194840119048934 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.8151884196929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006577642277652677",
            "extra": "mean: 18.243118902438 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.600134266672146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003890418597434457",
            "extra": "mean: 116.27725440000063 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.82366610495629,
            "unit": "iter/sec",
            "range": "stddev: 0.001081350450020841",
            "extra": "mean: 41.97506779999571 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150024.4982122192,
            "unit": "iter/sec",
            "range": "stddev: 3.570845047730161e-7",
            "extra": "mean: 6.665578035031561 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.41004340596405,
            "unit": "iter/sec",
            "range": "stddev: 0.00037148838925495407",
            "extra": "mean: 3.946173508198313 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12397.482985745217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000182653849043066",
            "extra": "mean: 80.66153437353474 usec\nrounds: 4102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2165.6485990956094,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365046154320479",
            "extra": "mean: 461.75542995184315 usec\nrounds: 1035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.9655267474786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649981295548058",
            "extra": "mean: 1.3158491600004902 msec\nrounds: 525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4946681358146297,
            "unit": "iter/sec",
            "range": "stddev: 0.003199794096971872",
            "extra": "mean: 400.8549216000034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.032638243068234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014707139634635794",
            "extra": "mean: 18.856312511111163 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.74635146552257,
            "unit": "iter/sec",
            "range": "stddev: 0.000039792285705563274",
            "extra": "mean: 7.590343025641173 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 214.1172413261663,
            "unit": "iter/sec",
            "range": "stddev: 0.004285179998994491",
            "extra": "mean: 4.670338520178732 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1853415.4622522288,
            "unit": "iter/sec",
            "range": "stddev: 1.1684755125400954e-7",
            "extra": "mean: 539.5444358626546 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.884476554086594,
            "unit": "iter/sec",
            "range": "stddev: 0.004455320126900244",
            "extra": "mean: 1.1306122195999961 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.40154106178609,
            "unit": "iter/sec",
            "range": "stddev: 0.0007530573655534587",
            "extra": "mean: 9.861783060976153 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.41028619988638,
            "unit": "iter/sec",
            "range": "stddev: 0.0010669611013730544",
            "extra": "mean: 16.553472312499668 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.53878035575835,
            "unit": "iter/sec",
            "range": "stddev: 0.0001321405910293762",
            "extra": "mean: 9.3862535000003 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.28663002345104,
            "unit": "iter/sec",
            "range": "stddev: 0.00013182255749228264",
            "extra": "mean: 6.124200124997259 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.62130644475552,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207629587214772",
            "extra": "mean: 9.378988434343913 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8085.837401736144,
            "unit": "iter/sec",
            "range": "stddev: 0.000016465455949486082",
            "extra": "mean: 123.67302857033532 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.15524670233195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007955180830679847",
            "extra": "mean: 9.885794682926187 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.74227049113051,
            "unit": "iter/sec",
            "range": "stddev: 0.012224023926535047",
            "extra": "mean: 11.26858704950474 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.44105683524937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008058554317979514",
            "extra": "mean: 8.973353523364066 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1929832.4960167815,
            "unit": "iter/sec",
            "range": "stddev: 1.1309653421143679e-7",
            "extra": "mean: 518.1796876485513 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.33687745924588,
            "unit": "iter/sec",
            "range": "stddev: 0.00004906116858029017",
            "extra": "mean: 9.146044987179543 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.41541398968708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003353259268738771",
            "extra": "mean: 10.058802351351025 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.7519319114866,
            "unit": "iter/sec",
            "range": "stddev: 0.00037818144110322735",
            "extra": "mean: 3.7348003163263073 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 936981.3440967376,
            "unit": "iter/sec",
            "range": "stddev: 2.3338835575418283e-7",
            "extra": "mean: 1.0672571084795859 usec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.0734677167555,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474133546017135",
            "extra": "mean: 3.73032067857082 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8967383846359824,
            "unit": "iter/sec",
            "range": "stddev: 0.0034342216308687035",
            "extra": "mean: 1.1151524426000066 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.7427954357195,
            "unit": "iter/sec",
            "range": "stddev: 0.00006337921933031597",
            "extra": "mean: 6.070068177216205 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1867.9126854156823,
            "unit": "iter/sec",
            "range": "stddev: 0.00339825443435125",
            "extra": "mean: 535.3569295865998 usec\nrounds: 1548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4529.229443407778,
            "unit": "iter/sec",
            "range": "stddev: 0.000029505007362696576",
            "extra": "mean: 220.78810810865065 usec\nrounds: 814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7101368.499633239,
            "unit": "iter/sec",
            "range": "stddev: 4.944915817088426e-9",
            "extra": "mean: 140.81792826999586 nsec\nrounds: 65356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.8007978050478,
            "unit": "iter/sec",
            "range": "stddev: 0.000024847307199380247",
            "extra": "mean: 840.4768275872789 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2123.464384190672,
            "unit": "iter/sec",
            "range": "stddev: 0.00008357203021498011",
            "extra": "mean: 470.92854838774974 usec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4493059.482364839,
            "unit": "iter/sec",
            "range": "stddev: 1.0949034511141862e-8",
            "extra": "mean: 222.56549327382842 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.21070918859539,
            "unit": "iter/sec",
            "range": "stddev: 0.0007625448422809057",
            "extra": "mean: 9.688917050000256 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.72191424317148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008184861058665113",
            "extra": "mean: 10.902519951217089 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.47614067392412,
            "unit": "iter/sec",
            "range": "stddev: 0.0008431960793619834",
            "extra": "mean: 23.542628500001527 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.6722781117657,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669342198696675",
            "extra": "mean: 3.6540054655868635 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.9674029513135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003606385214269658",
            "extra": "mean: 3.704150905138507 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2156.729749898337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000885048876026079",
            "extra": "mean: 463.6649538715444 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.863242504971,
            "unit": "iter/sec",
            "range": "stddev: 0.00027974777525183555",
            "extra": "mean: 3.5859871348307006 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.104531033791538,
            "unit": "iter/sec",
            "range": "stddev: 0.00020147133861816053",
            "extra": "mean: 52.34360363157981 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6153342.164333198,
            "unit": "iter/sec",
            "range": "stddev: 7.767213264170653e-9",
            "extra": "mean: 162.51330956289726 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.43683970991063,
            "unit": "iter/sec",
            "range": "stddev: 0.00024099567099626707",
            "extra": "mean: 5.0141187628852455 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.92612162031256,
            "unit": "iter/sec",
            "range": "stddev: 0.0009362202786915139",
            "extra": "mean: 10.53450813043664 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.909852691015658,
            "unit": "iter/sec",
            "range": "stddev: 0.0002873623150704144",
            "extra": "mean: 33.43379889999862 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.641851236708817,
            "unit": "iter/sec",
            "range": "stddev: 0.0015974253133699543",
            "extra": "mean: 609.0685791999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.3002863389079,
            "unit": "iter/sec",
            "range": "stddev: 0.000041922406433119307",
            "extra": "mean: 1.8786388541660757 msec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.03989354445272,
            "unit": "iter/sec",
            "range": "stddev: 0.016394701520629235",
            "extra": "mean: 11.622515542552916 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.9085880765836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007647986550158476",
            "extra": "mean: 9.812715678569768 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.29679061641963,
            "unit": "iter/sec",
            "range": "stddev: 0.000808793547676559",
            "extra": "mean: 9.970408762374593 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.62040517890487,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840495975422693",
            "extra": "mean: 9.650608857140242 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10327.54521937984,
            "unit": "iter/sec",
            "range": "stddev: 0.000003554634868704921",
            "extra": "mean: 96.82843103155633 usec\nrounds: 6039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5553134.012046264,
            "unit": "iter/sec",
            "range": "stddev: 9.67136834301864e-9",
            "extra": "mean: 180.07849222282468 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7857441335521866,
            "unit": "iter/sec",
            "range": "stddev: 0.003272452237733278",
            "extra": "mean: 1.2726789260000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.35362442883493,
            "unit": "iter/sec",
            "range": "stddev: 0.003401275659203662",
            "extra": "mean: 6.159394368422823 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.56753954224467,
            "unit": "iter/sec",
            "range": "stddev: 0.00020884751911131742",
            "extra": "mean: 7.900919964286959 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3628024339781328,
            "unit": "iter/sec",
            "range": "stddev: 0.0007333324768368257",
            "extra": "mean: 733.7820765999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.01835336783881,
            "unit": "iter/sec",
            "range": "stddev: 0.00029770961522874334",
            "extra": "mean: 9.998165000000418 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.38868624154594,
            "unit": "iter/sec",
            "range": "stddev: 0.00009449302308712694",
            "extra": "mean: 5.6692978518509065 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2266.147066030067,
            "unit": "iter/sec",
            "range": "stddev: 0.00007868131408578277",
            "extra": "mean: 441.27762711880945 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.88499024085361,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414812241189079",
            "extra": "mean: 9.912277313132432 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13561.409773551586,
            "unit": "iter/sec",
            "range": "stddev: 0.000002973131169619466",
            "extra": "mean: 73.7386464016647 usec\nrounds: 6892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1710443.1556473626,
            "unit": "iter/sec",
            "range": "stddev: 9.407266054801518e-8",
            "extra": "mean: 584.6438080671109 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1845549.018697206,
            "unit": "iter/sec",
            "range": "stddev: 1.3890927000559353e-7",
            "extra": "mean: 541.8441828794727 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1794.2323235081794,
            "unit": "iter/sec",
            "range": "stddev: 0.000030513639462920567",
            "extra": "mean: 557.3414250194458 usec\nrounds: 1287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.56167260617949,
            "unit": "iter/sec",
            "range": "stddev: 0.01569220828546606",
            "extra": "mean: 12.26066077419108 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 418.2229558769208,
            "unit": "iter/sec",
            "range": "stddev: 0.00012787916011586603",
            "extra": "mean: 2.3910691317821655 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16820898679258528,
            "unit": "iter/sec",
            "range": "stddev: 0.09402432272235439",
            "extra": "mean: 5.9449855745999916 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.45195544403137,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954388515486485",
            "extra": "mean: 5.196102048912767 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.0022976771576,
            "unit": "iter/sec",
            "range": "stddev: 0.000024859468948132225",
            "extra": "mean: 3.105567901886865 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.19692569355378,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876376723737844",
            "extra": "mean: 10.72996767391403 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 273.9067147613076,
            "unit": "iter/sec",
            "range": "stddev: 0.00036112324989337366",
            "extra": "mean: 3.6508780037445843 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6182293.57415985,
            "unit": "iter/sec",
            "range": "stddev: 5.232604094219053e-9",
            "extra": "mean: 161.75226685765028 nsec\nrounds: 62108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2144.4782983901437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010689458512883245",
            "extra": "mean: 466.3138819127703 usec\nrounds: 1338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.11265541057057,
            "unit": "iter/sec",
            "range": "stddev: 0.0003598680721474329",
            "extra": "mean: 20.784552244445347 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2148.758705963405,
            "unit": "iter/sec",
            "range": "stddev: 0.00008963721012295565",
            "extra": "mean: 465.3849672486357 usec\nrounds: 1374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2149.9383580487975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000911044120335841",
            "extra": "mean: 465.1296146497717 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.02377411049044,
            "unit": "iter/sec",
            "range": "stddev: 0.0008014321682647747",
            "extra": "mean: 9.898660080807245 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 666.2350312562013,
            "unit": "iter/sec",
            "range": "stddev: 0.000044121031532905105",
            "extra": "mean: 1.5009718088742305 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10705257.084404485,
            "unit": "iter/sec",
            "range": "stddev: 3.235676896708851e-9",
            "extra": "mean: 93.41204906299863 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.62333631116125,
            "unit": "iter/sec",
            "range": "stddev: 0.0013232188334147473",
            "extra": "mean: 24.61639271428453 msec\nrounds: 35"
          }
        ]
      }
    ]
  }
}