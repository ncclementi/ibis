window.BENCHMARK_DATA = {
  "lastUpdate": 1680772337909,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5f58661f1c7fd08eb167faa897083fd4e8c87cc1",
          "message": "chore(deps): update trinodb/trino docker tag to v412",
          "timestamp": "2023-04-06T05:05:04-04:00",
          "tree_id": "79bcb1d6d6005387eff5ced240db371361b0ccd0",
          "url": "https://github.com/ibis-project/ibis/commit/5f58661f1c7fd08eb167faa897083fd4e8c87cc1"
        },
        "date": 1680772250532,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.85303435020134,
            "unit": "iter/sec",
            "range": "stddev: 0.00007707067421708058",
            "extra": "mean: 6.255746123712793 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.49008620306199,
            "unit": "iter/sec",
            "range": "stddev: 0.00022414766470950633",
            "extra": "mean: 8.439524622222432 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.926485047288,
            "unit": "iter/sec",
            "range": "stddev: 0.00016930798050767524",
            "extra": "mean: 6.669935600001509 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6758621019158912,
            "unit": "iter/sec",
            "range": "stddev: 0.002176502719688474",
            "extra": "mean: 1.479591764600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.5130923134232,
            "unit": "iter/sec",
            "range": "stddev: 0.0002861191113568641",
            "extra": "mean: 3.683063647058472 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.2829853211335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007600406783687205",
            "extra": "mean: 10.495053199998791 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.47354483819782,
            "unit": "iter/sec",
            "range": "stddev: 0.018750984220623178",
            "extra": "mean: 25.99188622222215 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.96018571458563,
            "unit": "iter/sec",
            "range": "stddev: 0.00030038102847090316",
            "extra": "mean: 3.7884501304347395 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.78013182030497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005900518203075627",
            "extra": "mean: 11.39209954761863 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.832133862682596,
            "unit": "iter/sec",
            "range": "stddev: 0.01946463951376343",
            "extra": "mean: 25.105358488887457 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1891317.2565998216,
            "unit": "iter/sec",
            "range": "stddev: 7.672175621854206e-8",
            "extra": "mean: 528.7320234140851 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.46103415430655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008331244206575781",
            "extra": "mean: 9.954108161618324 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.2943399407104,
            "unit": "iter/sec",
            "range": "stddev: 0.000014952396710875738",
            "extra": "mean: 850.8506899220212 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.42107673613965,
            "unit": "iter/sec",
            "range": "stddev: 0.00029077546847589377",
            "extra": "mean: 19.83297590476173 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.320724895290198,
            "unit": "iter/sec",
            "range": "stddev: 0.00018941096167228035",
            "extra": "mean: 96.89241890909659 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 271.94911060752696,
            "unit": "iter/sec",
            "range": "stddev: 0.00027947885370480167",
            "extra": "mean: 3.6771585601660073 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.57315097279127,
            "unit": "iter/sec",
            "range": "stddev: 0.000055068413462935413",
            "extra": "mean: 3.4773760923689814 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1870880.6400792226,
            "unit": "iter/sec",
            "range": "stddev: 1.2071602903142652e-7",
            "extra": "mean: 534.5076423248759 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2249.735192101717,
            "unit": "iter/sec",
            "range": "stddev: 0.00022281232101659083",
            "extra": "mean: 444.4967583343858 usec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.07377740367849,
            "unit": "iter/sec",
            "range": "stddev: 0.00007360111954529164",
            "extra": "mean: 9.00302504672793 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.76355497262622,
            "unit": "iter/sec",
            "range": "stddev: 0.00435612669596711",
            "extra": "mean: 4.3523003468463 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 246.517513103042,
            "unit": "iter/sec",
            "range": "stddev: 0.0004019743320472145",
            "extra": "mean: 4.056506928909385 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5317659137479533,
            "unit": "iter/sec",
            "range": "stddev: 0.002004005402186769",
            "extra": "mean: 394.9812242000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17858445091769973,
            "unit": "iter/sec",
            "range": "stddev: 0.10979625794964804",
            "extra": "mean: 5.59959164899999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.93820984281964,
            "unit": "iter/sec",
            "range": "stddev: 0.001215802046552017",
            "extra": "mean: 26.35865013512926 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.10385284468694,
            "unit": "iter/sec",
            "range": "stddev: 0.004138980439495891",
            "extra": "mean: 5.743698279279731 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2280.906543355504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000810454079129961",
            "extra": "mean: 438.4221716199177 usec\nrounds: 1346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.53943888568257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006730697069109537",
            "extra": "mean: 16.518157723402645 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.202833334377992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072814022742401",
            "extra": "mean: 38.16381180000121 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.11090296310476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008271134379866797",
            "extra": "mean: 9.890130249997853 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9108176909248084,
            "unit": "iter/sec",
            "range": "stddev: 0.0063997329126456075",
            "extra": "mean: 1.0979145551999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.0953605507238,
            "unit": "iter/sec",
            "range": "stddev: 0.01643534701867455",
            "extra": "mean: 12.180956308513144 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.6941980636682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007341197792828371",
            "extra": "mean: 1.8494742565782947 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.911775594199231,
            "unit": "iter/sec",
            "range": "stddev: 0.0015654469552608757",
            "extra": "mean: 1.0967610960000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 268.35975608374713,
            "unit": "iter/sec",
            "range": "stddev: 0.00028832670725087493",
            "extra": "mean: 3.7263411421790438 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.97140687910215,
            "unit": "iter/sec",
            "range": "stddev: 0.0008603310815388034",
            "extra": "mean: 10.872944471910879 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.77764467757174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371712339604969",
            "extra": "mean: 10.66352224390174 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13580.542617309715,
            "unit": "iter/sec",
            "range": "stddev: 0.000002194418365438677",
            "extra": "mean: 73.63476027278934 usec\nrounds: 7179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.447631840215467,
            "unit": "iter/sec",
            "range": "stddev: 0.0009896902536169335",
            "extra": "mean: 183.56600249998678 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.25528744311389,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048004389919644",
            "extra": "mean: 13.650891763636123 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.0303282005526,
            "unit": "iter/sec",
            "range": "stddev: 0.00002369782749280256",
            "extra": "mean: 1.4683633879305238 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6651192047849093,
            "unit": "iter/sec",
            "range": "stddev: 0.0023519967839337745",
            "extra": "mean: 600.5576039999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.79656163143142,
            "unit": "iter/sec",
            "range": "stddev: 0.00039880623078810876",
            "extra": "mean: 7.257075126988509 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 506300.90317862184,
            "unit": "iter/sec",
            "range": "stddev: 9.682473438250431e-8",
            "extra": "mean: 1.9751100456702173 usec\nrounds: 1981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2320.7969787040784,
            "unit": "iter/sec",
            "range": "stddev: 0.00009227089329513083",
            "extra": "mean: 430.88646235587356 usec\nrounds: 1222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5695246.772686195,
            "unit": "iter/sec",
            "range": "stddev: 1.0431424595417173e-8",
            "extra": "mean: 175.58501675419012 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 267.57694730200956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003861857721192619",
            "extra": "mean: 3.737242726187907 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11460.73185417179,
            "unit": "iter/sec",
            "range": "stddev: 0.000015759183304139645",
            "extra": "mean: 87.254462692624 usec\nrounds: 5066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.92142869665626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007669939621143028",
            "extra": "mean: 10.878856151159626 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.1764325433121,
            "unit": "iter/sec",
            "range": "stddev: 0.010750499075390678",
            "extra": "mean: 4.480759857140959 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.84899055259265,
            "unit": "iter/sec",
            "range": "stddev: 0.0009257742278260617",
            "extra": "mean: 10.116441193883002 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11946.256023048549,
            "unit": "iter/sec",
            "range": "stddev: 0.000002832722679222581",
            "extra": "mean: 83.70823445191922 usec\nrounds: 5869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.63986588268256,
            "unit": "iter/sec",
            "range": "stddev: 0.0008919687259958658",
            "extra": "mean: 10.455890864868614 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137243.59913451536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022440673219326804",
            "extra": "mean: 7.286314307597536 usec\nrounds: 36232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.2209538134575,
            "unit": "iter/sec",
            "range": "stddev: 0.000005908836891062564",
            "extra": "mean: 573.3218591450019 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.751568327318545,
            "unit": "iter/sec",
            "range": "stddev: 0.000354054877326416",
            "extra": "mean: 20.9417205555509 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.4138949500898,
            "unit": "iter/sec",
            "range": "stddev: 0.00002886164682626108",
            "extra": "mean: 1.3379467611674214 msec\nrounds: 582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.59487118138166,
            "unit": "iter/sec",
            "range": "stddev: 0.000760132762337455",
            "extra": "mean: 10.46081225532069 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2318.5696126301846,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411329914581872",
            "extra": "mean: 431.3003994154829 usec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.91099419851896,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005305726403061",
            "extra": "mean: 9.531889461534787 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 734786.9692832499,
            "unit": "iter/sec",
            "range": "stddev: 1.777919415329827e-7",
            "extra": "mean: 1.3609386690341732 usec\nrounds: 23365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 378.6983927262143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003288488246967959",
            "extra": "mean: 2.6406238294308393 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2565393.9612148157,
            "unit": "iter/sec",
            "range": "stddev: 1.7799481202090908e-8",
            "extra": "mean: 389.8036773759767 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6425978.518878356,
            "unit": "iter/sec",
            "range": "stddev: 8.342730243561413e-9",
            "extra": "mean: 155.61832288455088 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.40238871175661,
            "unit": "iter/sec",
            "range": "stddev: 0.0002796929234619094",
            "extra": "mean: 18.381545804879252 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7935325120877386,
            "unit": "iter/sec",
            "range": "stddev: 0.0028359035197862434",
            "extra": "mean: 1.2601878117999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.8611533478444,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755661195136414",
            "extra": "mean: 6.06571032467592 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.50634766089631,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411623626093981",
            "extra": "mean: 10.694461124997966 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7339934.59533595,
            "unit": "iter/sec",
            "range": "stddev: 8.600030730064479e-9",
            "extra": "mean: 136.24099602137898 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 81.93803621507149,
            "unit": "iter/sec",
            "range": "stddev: 0.019080951453134917",
            "extra": "mean: 12.204344236115125 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2283.3534369083113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008906062475034777",
            "extra": "mean: 437.95234843450794 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.349334059281869,
            "unit": "iter/sec",
            "range": "stddev: 0.00011630246113776626",
            "extra": "mean: 65.14940623077337 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2399.889482608876,
            "unit": "iter/sec",
            "range": "stddev: 0.00008308719243513337",
            "extra": "mean: 416.6858545973202 usec\nrounds: 1403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2385.810878994521,
            "unit": "iter/sec",
            "range": "stddev: 0.00008298281037638545",
            "extra": "mean: 419.14470623146843 usec\nrounds: 1685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.95568854179291,
            "unit": "iter/sec",
            "range": "stddev: 0.0007532378498192586",
            "extra": "mean: 10.313989978720521 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 188.7548846056194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008737769076854321",
            "extra": "mean: 5.297876142857864 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70667.80813544536,
            "unit": "iter/sec",
            "range": "stddev: 5.600523744243265e-7",
            "extra": "mean: 14.150714821709927 usec\nrounds: 13851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2368.146838257118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007703116206311033",
            "extra": "mean: 422.27111251934394 usec\nrounds: 1262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.7745573758361,
            "unit": "iter/sec",
            "range": "stddev: 0.00024096209664960426",
            "extra": "mean: 3.5871279266415548 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5652.6212465418575,
            "unit": "iter/sec",
            "range": "stddev: 0.00002306157514526494",
            "extra": "mean: 176.9090756986021 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1676864.0940853977,
            "unit": "iter/sec",
            "range": "stddev: 1.1027960456042126e-7",
            "extra": "mean: 596.3512508420811 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.1097622290996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001926485620194386",
            "extra": "mean: 9.424203569893209 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.21592018544399,
            "unit": "iter/sec",
            "range": "stddev: 0.000786098065696025",
            "extra": "mean: 10.393290404255623 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 91.6441466144821,
            "unit": "iter/sec",
            "range": "stddev: 0.0007625941640478917",
            "extra": "mean: 10.911771640001007 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12591408.70779997,
            "unit": "iter/sec",
            "range": "stddev: 3.4144428745136225e-9",
            "extra": "mean: 79.41923125564033 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.81284864343179,
            "unit": "iter/sec",
            "range": "stddev: 0.016577227730338793",
            "extra": "mean: 11.65326656565364 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7991.025255307116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001694498030549849",
            "extra": "mean: 125.14038787899781 usec\nrounds: 4455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.96964633581536,
            "unit": "iter/sec",
            "range": "stddev: 0.00014826457853348046",
            "extra": "mean: 10.641734208792723 msec\nrounds: 91"
          }
        ]
      }
    ]
  }
}