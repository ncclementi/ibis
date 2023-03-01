window.BENCHMARK_DATA = {
  "lastUpdate": 1677639305591,
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
          "id": "30d4257663d7c3c4d4171521f493e48a59419e48",
          "message": "chore(deps): update zookeeper docker tag to v3.8",
          "timestamp": "2023-02-28T21:47:27-05:00",
          "tree_id": "bad29798b94857055ede1836832a478051000dcc",
          "url": "https://github.com/ibis-project/ibis/commit/30d4257663d7c3c4d4171521f493e48a59419e48"
        },
        "date": 1677639220871,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.94729112663134,
            "unit": "iter/sec",
            "range": "stddev: 0.000081787727282061",
            "extra": "mean: 3.401970455884228 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.26051000307706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545519859733493",
            "extra": "mean: 3.4811607066675756 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.34095909712892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634246957944133",
            "extra": "mean: 9.676705236111774 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6705329283292792,
            "unit": "iter/sec",
            "range": "stddev: 0.022802815711831036",
            "extra": "mean: 1.4913510698000039 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.75457957360334,
            "unit": "iter/sec",
            "range": "stddev: 0.00010409162000352819",
            "extra": "mean: 6.220662594200861 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 133.38900648439616,
            "unit": "iter/sec",
            "range": "stddev: 0.000435237248013152",
            "extra": "mean: 7.496869692308413 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 91.48641335469476,
            "unit": "iter/sec",
            "range": "stddev: 0.0004879182543957717",
            "extra": "mean: 10.930584808511169 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.117165698567293,
            "unit": "iter/sec",
            "range": "stddev: 0.001988624270183136",
            "extra": "mean: 66.14996619999829 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.638172836584895,
            "unit": "iter/sec",
            "range": "stddev: 0.018506822237145608",
            "extra": "mean: 103.75410536363977 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.23730973915964,
            "unit": "iter/sec",
            "range": "stddev: 0.00045485658887509887",
            "extra": "mean: 13.654242674417965 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5843.61354340887,
            "unit": "iter/sec",
            "range": "stddev: 0.00004266484710250567",
            "extra": "mean: 171.12699061489445 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 124.25980818616424,
            "unit": "iter/sec",
            "range": "stddev: 0.006426779440546549",
            "extra": "mean: 8.0476544636365 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2422553.89819971,
            "unit": "iter/sec",
            "range": "stddev: 2.328600906478301e-8",
            "extra": "mean: 412.78751351736474 nsec\nrounds: 96164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.4938431026293,
            "unit": "iter/sec",
            "range": "stddev: 0.00022630401024361532",
            "extra": "mean: 3.3168173177572897 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.99927760744634,
            "unit": "iter/sec",
            "range": "stddev: 0.00021959188755339926",
            "extra": "mean: 3.2154415524470554 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12720382.794795169,
            "unit": "iter/sec",
            "range": "stddev: 6.505010497763895e-9",
            "extra": "mean: 78.61398639748748 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.842255735638209,
            "unit": "iter/sec",
            "range": "stddev: 0.002197283477249842",
            "extra": "mean: 1.1872878482000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.414815950635977,
            "unit": "iter/sec",
            "range": "stddev: 0.003511381924680244",
            "extra": "mean: 184.678483833333 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.02769336851215,
            "unit": "iter/sec",
            "range": "stddev: 0.00006247347713101826",
            "extra": "mean: 10.098185325580554 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.515703768831225,
            "unit": "iter/sec",
            "range": "stddev: 0.0016457643103037814",
            "extra": "mean: 397.5030813999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9234499183080574,
            "unit": "iter/sec",
            "range": "stddev: 0.0023863943716198373",
            "extra": "mean: 1.082895758799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.41271086936055,
            "unit": "iter/sec",
            "range": "stddev: 0.0002264009044748028",
            "extra": "mean: 9.577377999994496 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5833.252953255913,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382517471430204",
            "extra": "mean: 171.43093365115183 usec\nrounds: 2517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6295160.069490225,
            "unit": "iter/sec",
            "range": "stddev: 1.1276832406020763e-8",
            "extra": "mean: 158.85219580776752 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4087.472920624953,
            "unit": "iter/sec",
            "range": "stddev: 0.002258885955202608",
            "extra": "mean: 244.6499388299569 usec\nrounds: 1504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.35619422153408,
            "unit": "iter/sec",
            "range": "stddev: 0.0006145505597268402",
            "extra": "mean: 9.582564863156424 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.75021681063413,
            "unit": "iter/sec",
            "range": "stddev: 0.000248526881679866",
            "extra": "mean: 3.207696245508718 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.77596690481877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434771293993521",
            "extra": "mean: 14.975447699999336 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1743.2672749044489,
            "unit": "iter/sec",
            "range": "stddev: 0.000009540381254701648",
            "extra": "mean: 573.6355029407705 usec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.491795872665996,
            "unit": "iter/sec",
            "range": "stddev: 0.00018337626056207635",
            "extra": "mean: 20.622045069765772 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.482528472569896,
            "unit": "iter/sec",
            "range": "stddev: 0.0007639006470486577",
            "extra": "mean: 26.6790966551739 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.29478741618261,
            "unit": "iter/sec",
            "range": "stddev: 0.00039291559311487273",
            "extra": "mean: 36.63703200000441 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5791.179481137148,
            "unit": "iter/sec",
            "range": "stddev: 0.00005374280276528923",
            "extra": "mean: 172.67639575964952 usec\nrounds: 2547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.48277745667116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006245243137504625",
            "extra": "mean: 7.018392102190027 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.48512110518588,
            "unit": "iter/sec",
            "range": "stddev: 0.0006585374645649956",
            "extra": "mean: 9.853661197916233 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5659809.440227599,
            "unit": "iter/sec",
            "range": "stddev: 1.11543553930099e-8",
            "extra": "mean: 176.6843938048724 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.6390242370753,
            "unit": "iter/sec",
            "range": "stddev: 0.00009436181669905987",
            "extra": "mean: 13.766704750001242 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139585.89609415134,
            "unit": "iter/sec",
            "range": "stddev: 3.3517765167143864e-7",
            "extra": "mean: 7.164047572008961 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11959.078658163067,
            "unit": "iter/sec",
            "range": "stddev: 0.000001691891787827261",
            "extra": "mean: 83.61848170614854 usec\nrounds: 5275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9128926602011885,
            "unit": "iter/sec",
            "range": "stddev: 0.002613558102000099",
            "extra": "mean: 1.0954190383999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.6937379431114,
            "unit": "iter/sec",
            "range": "stddev: 0.000019480030975391858",
            "extra": "mean: 1.4520242379241783 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1851049.0968831517,
            "unit": "iter/sec",
            "range": "stddev: 8.108236144459642e-8",
            "extra": "mean: 540.2341848651276 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.25208769327656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002915732230479376",
            "extra": "mean: 2.7758340177931555 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.66806812745113,
            "unit": "iter/sec",
            "range": "stddev: 0.000293289103386817",
            "extra": "mean: 17.340619037036557 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 740476.9805348968,
            "unit": "iter/sec",
            "range": "stddev: 1.6264668291972687e-7",
            "extra": "mean: 1.3504808742030467 usec\nrounds: 24391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.58457031035263,
            "unit": "iter/sec",
            "range": "stddev: 0.000319146319192408",
            "extra": "mean: 7.26825688188928 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5491.420575220513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004428490289420424",
            "extra": "mean: 182.1022422708616 usec\nrounds: 1973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 164.18723341652506,
            "unit": "iter/sec",
            "range": "stddev: 0.010072584375401759",
            "extra": "mean: 6.0906075289246715 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.4939887139567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984046234098328",
            "extra": "mean: 7.067438052238341 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.24919599378669,
            "unit": "iter/sec",
            "range": "stddev: 0.00006993113828733736",
            "extra": "mean: 7.448834181817238 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497972.9960935814,
            "unit": "iter/sec",
            "range": "stddev: 4.3313195197661935e-7",
            "extra": "mean: 2.008141019381853 usec\nrounds: 2099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.0407736681595,
            "unit": "iter/sec",
            "range": "stddev: 0.011824938376354737",
            "extra": "mean: 11.106079604396193 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 141.58498009734367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006767745785688326",
            "extra": "mean: 7.062896073527516 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 310.8916807476055,
            "unit": "iter/sec",
            "range": "stddev: 0.0002417469499525144",
            "extra": "mean: 3.216554388317134 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.41385598345687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006229811711478616",
            "extra": "mean: 7.071442844447885 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.4270511309135,
            "unit": "iter/sec",
            "range": "stddev: 0.000018258537751309143",
            "extra": "mean: 852.9315312499897 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.2675295100912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003534244069446589",
            "extra": "mean: 3.1030119649975063 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.58483401644833,
            "unit": "iter/sec",
            "range": "stddev: 0.00068091313798075",
            "extra": "mean: 9.382197844823576 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2406071.2746658395,
            "unit": "iter/sec",
            "range": "stddev: 2.0782933328225115e-8",
            "extra": "mean: 415.61528560250906 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13562.865340237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018140511085006244",
            "extra": "mean: 73.73073277025738 usec\nrounds: 6036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.96514144160035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007611968754229106",
            "extra": "mean: 9.526972347828178 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.764847243087404,
            "unit": "iter/sec",
            "range": "stddev: 0.0013346597330207142",
            "extra": "mean: 566.6212778000045 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.0640437655516,
            "unit": "iter/sec",
            "range": "stddev: 0.000574983940990614",
            "extra": "mean: 10.745288508193516 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6955985.117439561,
            "unit": "iter/sec",
            "range": "stddev: 9.375770005202844e-9",
            "extra": "mean: 143.76108963967047 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8012.548951739545,
            "unit": "iter/sec",
            "range": "stddev: 0.00002563752350745126",
            "extra": "mean: 124.80422971804714 usec\nrounds: 3513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.77230980736212,
            "unit": "iter/sec",
            "range": "stddev: 0.00005372768378256407",
            "extra": "mean: 5.107974672127991 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.08168466317413,
            "unit": "iter/sec",
            "range": "stddev: 0.00008233177928179999",
            "extra": "mean: 8.468713864071994 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.0431558992787,
            "unit": "iter/sec",
            "range": "stddev: 0.0007174550040409618",
            "extra": "mean: 9.519896764705512 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5299.455261763854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000476164367781039",
            "extra": "mean: 188.69863988004744 usec\nrounds: 3335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.45168130995745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006067839440293439",
            "extra": "mean: 22.001386333335095 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 292.48891262275197,
            "unit": "iter/sec",
            "range": "stddev: 0.0002324705305435532",
            "extra": "mean: 3.4189330153850506 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.0428765412412,
            "unit": "iter/sec",
            "range": "stddev: 0.02428750598179862",
            "extra": "mean: 28.53647013889176 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.1543619980184,
            "unit": "iter/sec",
            "range": "stddev: 0.000029797242462098304",
            "extra": "mean: 1.8343428388520073 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.9733959579444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002140208664232575",
            "extra": "mean: 3.2897615820904047 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.1312365007299,
            "unit": "iter/sec",
            "range": "stddev: 0.000032452997659069046",
            "extra": "mean: 6.5303462758575295 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5657.569965783139,
            "unit": "iter/sec",
            "range": "stddev: 0.00004484829543865091",
            "extra": "mean: 176.7543319919998 usec\nrounds: 2235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5445.896898818015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004604696757687874",
            "extra": "mean: 183.624482537861 usec\nrounds: 3121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.8190543985208,
            "unit": "iter/sec",
            "range": "stddev: 0.00001201231252956547",
            "extra": "mean: 1.3390124342842162 msec\nrounds: 525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 141.89001867466916,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749740172655946",
            "extra": "mean: 7.047712089550416 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68887.98956011153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010256141561022346",
            "extra": "mean: 14.516318539495218 usec\nrounds: 13587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17615243463330324,
            "unit": "iter/sec",
            "range": "stddev: 0.07925105611030804",
            "extra": "mean: 5.676901384200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11710.583373303452,
            "unit": "iter/sec",
            "range": "stddev: 0.000011207737299196668",
            "extra": "mean: 85.39284236511173 usec\nrounds: 4263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5602.797786112509,
            "unit": "iter/sec",
            "range": "stddev: 0.00004365642368759617",
            "extra": "mean: 178.48225800307674 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1660714.7440413039,
            "unit": "iter/sec",
            "range": "stddev: 1.0290243597256805e-7",
            "extra": "mean: 602.1503714518288 nsec\nrounds: 149277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.333331408848,
            "unit": "iter/sec",
            "range": "stddev: 0.00023995208866152382",
            "extra": "mean: 3.211991454544209 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.15945048195863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856995618025181",
            "extra": "mean: 7.134731169117422 msec\nrounds: 136"
          }
        ]
      }
    ]
  }
}