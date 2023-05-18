window.BENCHMARK_DATA = {
  "lastUpdate": 1684408744793,
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
          "id": "7656e4ebd75dcc2199209a00a8577a0d2b02d838",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-18T06:10:50-05:00",
          "tree_id": "42d211920a934b0b64714affac551fc6038ae060",
          "url": "https://github.com/ibis-project/ibis/commit/7656e4ebd75dcc2199209a00a8577a0d2b02d838"
        },
        "date": 1684408656466,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1868684.5228750834,
            "unit": "iter/sec",
            "range": "stddev: 1.0198819036752091e-7",
            "extra": "mean: 535.1358069051912 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.53252974295341,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447652776940246",
            "extra": "mean: 10.252989465519821 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.99173383997899,
            "unit": "iter/sec",
            "range": "stddev: 0.000626261608453441",
            "extra": "mean: 10.310156962961829 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 402.47991690205174,
            "unit": "iter/sec",
            "range": "stddev: 0.000057522635376702575",
            "extra": "mean: 2.484596020832915 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9180616235560207,
            "unit": "iter/sec",
            "range": "stddev: 0.004943585826100047",
            "extra": "mean: 1.0892514994000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.69708580021118,
            "unit": "iter/sec",
            "range": "stddev: 0.008650421376318084",
            "extra": "mean: 11.669008235954923 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6412178.97110205,
            "unit": "iter/sec",
            "range": "stddev: 4.487782001199818e-9",
            "extra": "mean: 155.9532265875282 nsec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.44983205606262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007239692619089953",
            "extra": "mean: 10.368084409091953 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 611.3826051929858,
            "unit": "iter/sec",
            "range": "stddev: 0.004317560464750798",
            "extra": "mean: 1.6356369833000814 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.80641815084557,
            "unit": "iter/sec",
            "range": "stddev: 0.010857449255635273",
            "extra": "mean: 11.260447395833614 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.2701673006674,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521497291055865",
            "extra": "mean: 9.874576359995899 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.5979761259355,
            "unit": "iter/sec",
            "range": "stddev: 0.004245958379888482",
            "extra": "mean: 6.345259149780621 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.51549749897844,
            "unit": "iter/sec",
            "range": "stddev: 0.00030964512366136207",
            "extra": "mean: 40.790524444452736 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.53157298647156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470643364134624",
            "extra": "mean: 10.047063157897858 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2301.2513988195124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009156982095146527",
            "extra": "mean: 434.54617801122316 usec\nrounds: 1528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.512024752764189,
            "unit": "iter/sec",
            "range": "stddev: 0.0008192200820376786",
            "extra": "mean: 117.48086137499314 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.0069611266238,
            "unit": "iter/sec",
            "range": "stddev: 0.000018874582356657508",
            "extra": "mean: 573.3922067340848 usec\nrounds: 1277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.19199056049341,
            "unit": "iter/sec",
            "range": "stddev: 0.00015228086505856794",
            "extra": "mean: 19.53430583673638 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4624.121978701125,
            "unit": "iter/sec",
            "range": "stddev: 0.00002809940065201072",
            "extra": "mean: 216.25727102486408 usec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2269.9856234511994,
            "unit": "iter/sec",
            "range": "stddev: 0.00010849333187557126",
            "extra": "mean: 440.5314243707139 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.81649049555352,
            "unit": "iter/sec",
            "range": "stddev: 0.00007772618886903354",
            "extra": "mean: 9.361850360002487 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.88089784439956,
            "unit": "iter/sec",
            "range": "stddev: 0.00028635193969798637",
            "extra": "mean: 27.114307363638435 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9743.258125513572,
            "unit": "iter/sec",
            "range": "stddev: 0.000006258399480107448",
            "extra": "mean: 102.63507207937072 usec\nrounds: 4495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.1918054117343,
            "unit": "iter/sec",
            "range": "stddev: 0.0009704691512405432",
            "extra": "mean: 10.846951044444115 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 429.09192163229363,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846892556196933",
            "extra": "mean: 2.330502975203856 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 268.4166258010569,
            "unit": "iter/sec",
            "range": "stddev: 0.00030726001252602417",
            "extra": "mean: 3.7255516382996805 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.82071188303954,
            "unit": "iter/sec",
            "range": "stddev: 0.019156588444384694",
            "extra": "mean: 24.497367974993267 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1586630.5495284824,
            "unit": "iter/sec",
            "range": "stddev: 8.413051989253464e-7",
            "extra": "mean: 630.2664475338519 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.27761925593285,
            "unit": "iter/sec",
            "range": "stddev: 0.0003175694671239382",
            "extra": "mean: 3.6326963401636867 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.33439080524596,
            "unit": "iter/sec",
            "range": "stddev: 0.00048718020533447895",
            "extra": "mean: 4.0927517272715 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.9606781036718,
            "unit": "iter/sec",
            "range": "stddev: 0.00027642017850821075",
            "extra": "mean: 3.759954317796553 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.33918534492668,
            "unit": "iter/sec",
            "range": "stddev: 0.0008963459054465234",
            "extra": "mean: 10.168886354838916 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11763.446919219434,
            "unit": "iter/sec",
            "range": "stddev: 0.00003453714072595571",
            "extra": "mean: 85.00909698212463 usec\nrounds: 5269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.61409185749086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007523924659881667",
            "extra": "mean: 10.14053854945112 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1950.0550654868855,
            "unit": "iter/sec",
            "range": "stddev: 0.0034387070856768563",
            "extra": "mean: 512.8060318390661 usec\nrounds: 1539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.63158545186147,
            "unit": "iter/sec",
            "range": "stddev: 0.00007664626334461854",
            "extra": "mean: 9.039009934781461 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.2782639721073,
            "unit": "iter/sec",
            "range": "stddev: 0.00008962427863066541",
            "extra": "mean: 6.74407680000968 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5915247.145409412,
            "unit": "iter/sec",
            "range": "stddev: 1.0195216193304374e-8",
            "extra": "mean: 169.05464394248705 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141872.46875795786,
            "unit": "iter/sec",
            "range": "stddev: 5.822031049764284e-7",
            "extra": "mean: 7.0485839060575906 usec\nrounds: 36100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1872052.2541408504,
            "unit": "iter/sec",
            "range": "stddev: 1.1439910193767467e-7",
            "extra": "mean: 534.1731235269042 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.19725374154388,
            "unit": "iter/sec",
            "range": "stddev: 0.00005403168994389622",
            "extra": "mean: 5.045478588235309 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13563.937240942952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016872024555177214",
            "extra": "mean: 73.72490614166841 usec\nrounds: 6350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.62398320810341,
            "unit": "iter/sec",
            "range": "stddev: 0.00007758385125386882",
            "extra": "mean: 9.65027563157599 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.817983298569157,
            "unit": "iter/sec",
            "range": "stddev: 0.00011035365371680765",
            "extra": "mean: 33.536808642856336 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1072628.3853442662,
            "unit": "iter/sec",
            "range": "stddev: 1.2546485863415197e-7",
            "extra": "mean: 932.2893312011729 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9137582346356977,
            "unit": "iter/sec",
            "range": "stddev: 0.0015723506253150375",
            "extra": "mean: 1.0943813824000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2279.749420743581,
            "unit": "iter/sec",
            "range": "stddev: 0.00008669023633264972",
            "extra": "mean: 438.6446996766128 usec\nrounds: 1232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.65780960186225,
            "unit": "iter/sec",
            "range": "stddev: 0.00006896780246228905",
            "extra": "mean: 5.272653955559449 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.04028797344154,
            "unit": "iter/sec",
            "range": "stddev: 0.00027497640587637945",
            "extra": "mean: 3.609583311203694 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.65314966031922,
            "unit": "iter/sec",
            "range": "stddev: 0.000249852018274623",
            "extra": "mean: 9.837373493507743 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.43620430011225,
            "unit": "iter/sec",
            "range": "stddev: 0.0004738477899484014",
            "extra": "mean: 18.37012724999891 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2244.750834232096,
            "unit": "iter/sec",
            "range": "stddev: 0.00009318086311610565",
            "extra": "mean: 445.483741335634 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.6552747751941,
            "unit": "iter/sec",
            "range": "stddev: 0.00028375888766811404",
            "extra": "mean: 3.667634894738442 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.8981990204652,
            "unit": "iter/sec",
            "range": "stddev: 0.000015218414456117694",
            "extra": "mean: 849.6911634602739 usec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 93.5614065186312,
            "unit": "iter/sec",
            "range": "stddev: 0.0006998245724389278",
            "extra": "mean: 10.688167666663569 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3414884840110246,
            "unit": "iter/sec",
            "range": "stddev: 0.000513601053667056",
            "extra": "mean: 745.4406145999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.65637634742001,
            "unit": "iter/sec",
            "range": "stddev: 0.0006078351417896009",
            "extra": "mean: 21.90274568420735 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.48672371181814,
            "unit": "iter/sec",
            "range": "stddev: 0.00008868506352176225",
            "extra": "mean: 8.098036533333795 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6347151.794639727,
            "unit": "iter/sec",
            "range": "stddev: 1.1710983350424243e-8",
            "extra": "mean: 157.55098229191117 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.47521663883337,
            "unit": "iter/sec",
            "range": "stddev: 0.0009029905652443413",
            "extra": "mean: 10.259017978951665 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.21202519929179,
            "unit": "iter/sec",
            "range": "stddev: 0.000837518735572303",
            "extra": "mean: 10.079423315785094 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.3322843406513,
            "unit": "iter/sec",
            "range": "stddev: 0.003651253561843242",
            "extra": "mean: 4.160905817308265 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 97.42223259917854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008751391239062347",
            "extra": "mean: 10.264597446809404 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.99075397161324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223478801546928",
            "extra": "mean: 52.657203684212185 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.02990360978308,
            "unit": "iter/sec",
            "range": "stddev: 0.00018238392974301084",
            "extra": "mean: 18.85728488888895 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.486634627327752,
            "unit": "iter/sec",
            "range": "stddev: 0.0023622649536816764",
            "extra": "mean: 402.1499535999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 82.71589560702748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371384160465549",
            "extra": "mean: 12.089574714283101 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2172.5966908056407,
            "unit": "iter/sec",
            "range": "stddev: 0.00010022244348617488",
            "extra": "mean: 460.2787089900154 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.5631039129926,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128603107010787",
            "extra": "mean: 10.249776400019073 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.782960206276771,
            "unit": "iter/sec",
            "range": "stddev: 0.003741053363866954",
            "extra": "mean: 1.2772041183999931 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.0100219659015,
            "unit": "iter/sec",
            "range": "stddev: 0.000011785121260036166",
            "extra": "mean: 1.3244857298664612 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.22579670187382,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102622176875648",
            "extra": "mean: 10.72664472042962 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.7893783758367,
            "unit": "iter/sec",
            "range": "stddev: 0.00015120323480087756",
            "extra": "mean: 1.87339808641885 msec\nrounds: 405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.42379888344394,
            "unit": "iter/sec",
            "range": "stddev: 0.0008837125632993579",
            "extra": "mean: 10.264432422681256 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2261.9859004011605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000921427164842501",
            "extra": "mean: 442.0894046345078 usec\nrounds: 1683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.360230771183836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007880300661665852",
            "extra": "mean: 28.280358419349778 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17511639635582288,
            "unit": "iter/sec",
            "range": "stddev: 0.08168134012697499",
            "extra": "mean: 5.7104875431999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.6128393528356,
            "unit": "iter/sec",
            "range": "stddev: 0.000058244117405377494",
            "extra": "mean: 6.074860283872347 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6372159743933994,
            "unit": "iter/sec",
            "range": "stddev: 0.0010027177275666477",
            "extra": "mean: 610.7929654000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.30635971675896,
            "unit": "iter/sec",
            "range": "stddev: 0.0009239314305420872",
            "extra": "mean: 10.27682057895103 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2333.220502425439,
            "unit": "iter/sec",
            "range": "stddev: 0.00008274790034073536",
            "extra": "mean: 428.5921536179182 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 225.9698023353903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003226171054302194",
            "extra": "mean: 4.425370070093586 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12580274.400504058,
            "unit": "iter/sec",
            "range": "stddev: 3.602896410422041e-9",
            "extra": "mean: 79.48952210127604 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.83090065316833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270339375371438",
            "extra": "mean: 10.88958066279728 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 208.24198267494492,
            "unit": "iter/sec",
            "range": "stddev: 0.01251028757067958",
            "extra": "mean: 4.802105642458028 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 264.8218772144908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003137157079892811",
            "extra": "mean: 3.7761230700364536 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2547043.79541134,
            "unit": "iter/sec",
            "range": "stddev: 1.888890823213282e-8",
            "extra": "mean: 392.61201625227295 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 168.82078134551978,
            "unit": "iter/sec",
            "range": "stddev: 0.00017415118028181562",
            "extra": "mean: 5.923441367999203 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8061.825711485573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014310192483776505",
            "extra": "mean: 124.04138166560878 usec\nrounds: 4876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7422006.641740122,
            "unit": "iter/sec",
            "range": "stddev: 4.924238081890232e-9",
            "extra": "mean: 134.7344523213859 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2213.366959877902,
            "unit": "iter/sec",
            "range": "stddev: 0.00009853265674829869",
            "extra": "mean: 451.8003648410673 usec\nrounds: 1132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4578956.481862026,
            "unit": "iter/sec",
            "range": "stddev: 1.503046444854421e-8",
            "extra": "mean: 218.3903699369552 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}